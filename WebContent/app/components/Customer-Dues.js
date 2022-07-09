Vue.component("customer-dues", {
	data: function(){
		return{
			dues: null,
			paymentDate : "",
			validityDate : "",
			user : {},
			customer : {},
			exists : false,
			predefinedDues : []
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
	    <h1 class="heading"> Memberships </h1>
	
	    <div class="box-container">
	
	        <div class="box" v-for="due in predefinedDues">
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <h3>{{due.type}}</h3>	           
	            <span>{{due.price}} din</span>
	            <h3>
	            	Sessions: {{due.numberOfSession}}
	            </h3>
	            <br></br>
	            <div><a href="#" v-on:click="createMembership(due)" class="btn">Subcribe</a></div>
	        </div>
	        
	    </div>
	
	</section>			
	</body>
	</html>
	
	
	
	`,
	methods : {
		createMembership : function(d){
			
			this.paymentDate = d.paymentDate
      		this.paymentDate = new Date(this.paymentDate)
      		this.paymentDate = this.paymentDate.toLocaleDateString('en-CA')
      		d.paymentDate = this.paymentDate
      		
      		this.validityDate = d.dateAndTimeOfValidity
      		this.validityDate = new Date(this.validityDate)
      		this.validityDate = this.validityDate.toLocaleDateString('en-CA')
      		d.dateAndTimeOfValidity = this.validityDate
	          		
			var m = {id : Math.random().toString(36).slice(-10), type : d.type, paymentDate : d.paymentDate, dateAndTimeOfValidity : d.dateAndTimeOfValidity, price : d.price, customerId : this.customer.username,
					status : true, numberOfSession : d.numberOfSession}
					
			for(let d of this.dues){
				if(d.customerId === m.customerId){
					m.id = d.id
					
					axios
						.post('rest/dues', m)
						.then(response => toast("Uspesno UPDEJTOVANA clanarina"))
						.catch(error => {
								alert(error.message + " GRESKA U UPDEJTOVANJU CLANARINE");
							})
					this.exists = true
					break
				}	
					
			}
			
			if(this.exists === false){
					axios
						.post('rest/dues', m)
						.then(response => toast("Uspesno kreirana clanarina"))
						.catch(error => {
								alert(error.message + " GRESKA U KREIRANJU CLANARINE");
							})
			
			}
		}
	},
	mounted () {          	
          	axios
	          .get('rest/login/loggedUser')
	          .then(response => {(this.user = response.data)
	          		
	          	axios
	          		.get('rest/customers/getCustomerById/' + this.user.username, this.user)
	          		.then(response => {(this.customer = response.data)
	          		
	          			axios
					       .get('rest/dues/')
					       .then(response => {(this.dues = response.data)
					       for(let d of this.dues){
								if(d.customerId === "")
									this.predefinedDues.push(d)
						   }

	    		})
	    	})
          })
    },
});