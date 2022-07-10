Vue.component("details-view", {
	data: function(){
		return{
			sportFacility: {},
			param : null,
			trainings : []
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
		this.param=this.$route.params.id;
        axios
          .get('rest/sportFacilities/getFacilityById/' + this.param)
          .then(response => {(this.sportFacility = response.data)
          
          axios
          	.get('rest/trainings/getTrainingsByFacilityId/' + this.param)
          	.then(response => this.trainings = response.data)
          })
    },
});