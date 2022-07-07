Vue.component("manager-facility", {
	data: function(){
		return{
			sportFacility: {},
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
	    <h1 class="heading"> {{manager.name}}'s Facility </h1>
	
	    <div class="box-container">
	
	        <div class="box" >
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <img :src="sportFacility.imageName" alt="JEBISE"/>
	            <h3>{{sportFacility.name}}</h3>
	            <div>
	            	Type: {{sportFacility.type}}
	            </div>
	            <h4>{{sportFacility.location}}</h4>
	            <span>{{sportFacility.averageGrade}}</span>
	            <br></br>
	            <span>{{ConvertWorking(sportFacility)}}</span>
	            <br></br>
	            <div><a href="#/manager/createTraining" class="btn">Create training</a></div>
	        </div>
	        
	    </div>
	
	</section>	
		
		</body>
	</html>
	
	
	
	`,
	methods : {
		ConvertWorking: function(sportFacility) {
			
			if(sportFacility.isWorking===true)
				return "Radi";
				else
				return "Ne radi";
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
          		})
          })
    })
    },
});