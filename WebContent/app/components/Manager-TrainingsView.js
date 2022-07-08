Vue.component("all-trainings", {
	data: function(){
		return{
			trainings: null,
			user : {},
			manager : {}
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
	    <h1 class="heading"> Trainings </h1>
	
	    <div class="box-container">
	
	        <div class="box" v-for="tr in trainings">
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <img :src="tr.imageName" alt="JEBISE"/>
	            <h3>{{tr.name}}</h3>
	            <div>
	            	Type: {{tr.type}}
	            </div>
	            <h4>{{tr.trainerId}}</h4>
	            <span>{{tr.durationInMinutes}} min</span>
	            <br></br>
	            <br></br>
	            <div><a href="#" class="btn">Details</a></div>
	        </div>
	        
	    </div>
	
	</section>	
		
		</body>
	</html>
	
	
	
	`,
	mounted () {
        axios
          .get('rest/login/loggedUser')
          .then(response => {(this.user = response.data)
          		
          	axios
          		.get('rest/managers/getManagerById/' + this.user.username, this.user)
          		.then(response => {(this.manager = response.data)
          		
          			axios
          				.get('rest/trainings/getTrainingsByFacilityId/' + this.manager.sportFacilityId, this.manager)
          				.then(response => (this.trainings = response.data))
          		})
           })	
    },
});