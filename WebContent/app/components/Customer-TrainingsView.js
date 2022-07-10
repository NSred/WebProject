Vue.component("customer-trainings", {
	data: function(){
		return{
			trainingHistory: null,
			user : {},
			customer : {},
			trainingsByHistory : {},
			sportFacility : {}
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
	    <h1 class="heading"> Training History </h1>
	
	    <div class="box-container">
	
	        <div class="trainer-box" v-for="tr in trainingHistory">
	            <h3>{{tr.trainingId}}</h3>
	            <span>
	            	Training date: {{tr.trainingDate|dateFormat('DD-MM-YYYY')}}
	            </span>
	            <br></br>
	        </div>
	        
	    </div>
	
	</section>	
		
		</body>
	</html>
	
	
	
	`,
	methods :  {
		redirectWithParam : function(id){
			router.push({ name : 'editTraining', params:{id}});
		}
	},
	filters : {
		dateFormat : function(value, format){
			var parsed = moment(value);
			return parsed.format(format);
		}
	},
	mounted () {
        axios
          .get('rest/login/loggedUser')
          .then(response => {(this.user = response.data)
          		
          	axios
          		.get('rest/customers/getCustomerById/' + this.user.username)
          		.then(response => {(this.customer = response.data)
          		
          			axios
          				.get('rest/trainingsHistory/getTrainingHistoryByCustomerId/' + this.customer.username)
          				.then(response => {(this.trainingHistory = response.data)
          				axios
          					.post('rest/trainings/getTrainingsByTrainingHistory',  this.trainingHistory)
          					.then(response => {(this.trainingsByHistory = response.data)
          					
          					/*axios
          						.get('rest/sportFacilities/getFacilityById/' + this.training.sportFacilityId)
          						.then(response => this.sportFacility = response.data)*/
          					})
          				
          				})
          				          				
          		})
           })	
    },
});