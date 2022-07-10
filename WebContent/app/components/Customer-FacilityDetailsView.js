Vue.component("customer-details-view", {
	data: function(){
		return{
			sportFacility: {},
			param : null,
			trainings : [],
			user : {},
			due : {},
			customer : {},
			paymentDate : "",
			validityDate : ""
		}
	},
	
	template: `
	
	<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>Complete Responsive Food Website Design Tutorial</title>
		
		    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
		
		    <!-- font awesome cdn link  -->
		
		    <!-- custom css file link  -->
		    <link rel="stylesheet" href="css/dataView.css">
		
		</head>
		<body>
	<section class="dishes" id="dishes">
	
	    <h3 class="sub-heading"> Clean Fit </h3>
	    <h1 class="heading"> {{sportFacility.name}}'s details </h1>
	
	    <div>
	
	        <div class="facilityDetails-box" >
	           
	            <img :src="sportFacility.imageName" alt="JEBISE" style='float: left;'/>
	            <h3>{{sportFacility.name}}</h3>
	            <h3>
	            	Type: {{sportFacility.type}}
	            </h3>
	            <h3>{{sportFacility.location}}</h3>
	            <h3>Average grade: {{sportFacility.averageGrade}}</h3>
	            <br></br>
	            <span>{{ConvertWorking(sportFacility)}}</span>
	            <br></br>
	        </div>
	        
	    </div>
	    
	    <div class="box-container">
	
	        <div class="box" v-for="tr in trainings">
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <img :src="tr.imageName" alt="JEBISE"/>
	            <h3>{{tr.name}}</h3>
	            <div>
	            	Type: {{tr.type}}
	            </div>
	            <h4>Trainer :{{tr.trainerId}}</h4>
	            <span>{{tr.durationInMinutes}} min</span>
	            <br></br>
				<h4>Description :{{tr.description}}</h4>
				<div class="btn" v-on:click="assignToTraining(tr)">Sign to training</div>
	        </div>
	        
	    </div>
	
	</section>	
		
		</body>
	</html>
	
	
	
	`,
	methods : {
		assignToTraining : function(tr){
			if(this.due.numberOfSession > 0){
				this.due.numberOfSession -= 1
				
				
	      		this.paymentDate = this.due.paymentDate	      		
	      		this.paymentDate = new Date(this.paymentDate)  		
	      		this.paymentDate = this.paymentDate.toLocaleDateString('en-CA')
	      		this.due.paymentDate = this.paymentDate
	      		
	      		this.validityDate = this.due.dateAndTimeOfValidity
	      		this.validityDate = new Date(this.validityDate)
	      		this.validityDate = this.validityDate.toLocaleDateString('en-CA')
	      		this.due.dateAndTimeOfValidity = this.validityDate
					      						
				axios
					.post('rest/dues', this.due)
					.then(response => {toast("USPESNO UPDATEOVANA CLANARINA")

					console.log(this.due)	
					this.customer.due = this.due
					console.log(this.customer)
					console.log(this.customer.due)
					
										      		
		      		this.customer.birthdate = new Date(this.customer.birthdate)  		
		      		this.customer.birthdate = this.customer.birthdate.toLocaleDateString('en-CA')
		      		
		      		/*console.log(this.customer)
		      		console.log(this.customer.visitedFacilities)
		      		console.log(this.sportFacility)*/
		      		
		      		/*if(this.customer.visitedFacilities.lenght === 0){
						let visited = []
						visited.push(this.sportFacility)
						this.customer.visitedFacilities = visited
					}else{
						this.cutomer.visitedFacilities.push(this.sportFacility)
					}*/
		      				      				      		      		
					axios
						.post('rest/customers', this.customer)
						.then(response => {toast("USPESNO AZURIRAN KASTOMER")

					})
					
					let date = new Date()
					date = date.toLocaleDateString('en-CA')
	      			
	      			var th = {id : Math.random().toString(36).slice(-10), trainingDate : "2022-07-22", dateAndTimeOfSign : date, trainingId : tr.name, customerId : this.customer.username,
	      					  trainerId : tr.trainerId, deleted : false}
	      					  
	      			axios
	      				.post('rest/trainingsHistory', th)
	      				.then(response => toast("USPESNO UPISAN TRENING U ISTORIJU"))
	      				.catch(error => alert(error.message + " GRESKA U UPISIVANJU TRENINGA"))					
				
				})
			}
			else {
				alert("NEMATE DOVOLJNO TERMINA")
				}
		},
		ConvertWorking: function(sportFacility) {
			
			if(sportFacility.isWorking===true)
				return "Radi";
				else
				return "Ne radi";
		}
	},
	mounted () {
		this.param=this.$route.params.id;
        axios
          .get('rest/sportFacilities/getFacilityById/' + this.param)
          .then(response => {(this.sportFacility = response.data)
          
          axios
          	.get('rest/trainings/getTrainingsByFacilityId/' + this.param)
          	.then(response => this.trainings = response.data)
          })
          
          axios
	          .get('rest/login/loggedUser')
	          .then(response => {(this.user = response.data)
	          
	          axios
	          .get('rest/dues/getDueByCustomerId/' + this.user.username)
	          .then(response => {(this.due = response.data)
	          
	          	 axios
		          .get('rest/customers/getCustomerById/' + this.user.username)
		          .then(response => {(this.customer = response.data)
	          })
          })
       })
    },
});