Vue.component("manager-trainers", {
	data: function(){
		return{
			sportFacility: {},
			user : {},
			manager : {},
			trainers : null,
			trainings : null
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
	    <h1 class="heading">{{sportFacility.name}}'s trainers </h1>
	
	    <div class="box-container">
	
	        <div class="box" v-for="t in trainers">
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <h3>{{t.name}} &nbsp {{t.surname}}</h3>
	            <div>
	            	{{t.gender}}
	            </div>
	            <h4>{{t.birthdate|dateFormat('YYYY-DD-MM')}}</h4>
	            <span>{{t.username}}</span>
	            <br></br>	            
	            <div><a href="#" class="btn">Details</a></div>
	        </div>
	        
	    </div>
	</section>
	
		
				
		</body>
	</html>	
	`,
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
          		
          	console.log(this.user.username)
          	axios
          		.get('rest/managers/getManagerById/' + this.user.username, this.user)
          		.then(response => {(this.manager = response.data)
          		
          		console.log(this.manager.sportFacilityId)
          			axios
	          			.get('rest/sportFacilities/getFacilityById/' + this.manager.sportFacilityId, this.manager)
	          			.then(response => {(this.sportFacility = response.data)
	          			console.log(this.sportFacility)
	          				axios
		          				.get('rest/trainings/getTrainingsByFacilityId/' + this.manager.sportFacilityId)
		          				.then(response => {(this.trainings = response.data)
		          					console.log(this.trainings)
		          					axios
				          				.post('rest/trainers/getTrainersByTrainingIds' , this.trainings)
				          				.then(response => {(this.trainers = response.data)
				          				for(var t of this.trainers){
											t.birthdate = new Date(parseInt(t.birthdate))
										}
				          			})
				          				
		          				})
		          				
          				})	          			
          		})
          })
      },
});