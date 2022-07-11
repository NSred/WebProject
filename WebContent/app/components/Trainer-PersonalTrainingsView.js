Vue.component("trainer-personal", {
	data: function(){
		return{
			trainings: null,
			user : {},
			trainer : {},
			trainingType : "Personal trainings",
			trainingsHistory : null,
			mode : "BROWSE",
			trainingsHistoryByTrainingId : [],
			trainingsHistoryByTrainingIdAndTrainerId : [],
			birth : "",
			trainingByTypeAndTrainer : []
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
	    <h1 class="heading"> {{trainer.name}}'s personal trainings </h1>
	
		<button class="selectedBtnn" v-on:click="ShowPersonal()">Personal trainings</button>
	    <button class="btn" v-on:click="ShowGroup()">Group trainings</button>
	    <button class="btn" v-on:click="ShowAll()">All trainings</button>
	
	    <div class="box-container">
	
	        <div class="box" v-for="tr in trainingByTypeAndTrainer" v-if="tr.deleted === false">
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
	            <div class="btn" v-on:click="showSchedule(tr)">Show schedule</div>
	        </div>
	        
	    </div>	
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    <br></br>
	    	    <div class="btn" v-on:click="closeSchedule()" v-show="mode === 'SCHEDULE'">Close schedule</div>
	    
	    <div class="box-container" v-show="mode=='SCHEDULE'">

	        <div class="trainer-box" v-for="th in trainingsHistoryByTrainingIdAndTrainerId">
	            <h3>{{th.trainingId}}</h3>
	            <h4>
	            	Trainer: {{th.trainerId}}
	            </h4>
	            <h4>Customer : {{th.customerId}}</h4>
	            <span>{{th.trainingDate|dateFormat('DD-MM-YYYY')}}</span>
	            <br></br>
	            <div class="btn" v-on:click="cancelTraining(th)">Cancel Training</div>
	        </div>
	        
		</div>    	 
	
	</section>	
		</body>
	</html>	
	`,
	methods :  {
		cancelTraining : function(th){
			this.mode = "BROWSE"
			let d = new Date()
			d = d.getTime()
			if(th.trainingDate - d >= 172800000){
				th.deleted = true
				
					this.birth = th.trainingDate
	          		this.birth = new Date(this.birth)
	          		this.birth = this.birth.toLocaleDateString('en-CA')
	          		th.trainingDate = this.birth
	          		
	          		this.birth1 = th.dateAndTimeOfSign
	          		this.birth1 = new Date(this.birth1)
	          		this.birth1 = this.birth1.toLocaleDateString('en-CA')
	          		th.dateAndTimeOfSign = this.birth1
				
				axios
					.post('rest/trainingsHistory', th)
					.then(response => toast("USPESNO OTKAZAN TRENING"))
					.catch(error =>  {
						alert(error.message + " NIJE OTKAZAN TRENING");
					})
				} else {
					alert("NIJE MOGUCE OTKAZATI TRENING")					
				}
		},
		closeSchedule : function(){
			this.mode = "BROWSE"
		},
		showSchedule : function(tr){
			this.mode = "SCHEDULE"
			this.trainingsHistoryByTrainingIdAndTrainerId = []
			axios
				.get('rest/trainingsHistory/getTrainingHistoryByTrainingId/' + tr.name)
				.then(response => {(this.trainingsHistoryByTrainingId = response.data)
					for(let th of this.trainingsHistoryByTrainingId){
						if(th.trainerId === this.trainer.username && th.deleted === false){
							this.trainingsHistoryByTrainingIdAndTrainerId.push(th)
						}
					}
					console.log(this.trainingsHistoryByTrainingIdAndTrainerId)
				})
		},
		ShowPersonal : function(){
			router.push({ path : '/trainer/personalTrainingsView'});
		},
		ShowGroup : function(){
			router.push({ path : '/trainer/groupTrainigsView'});
		},
		ShowAll : function(){
			router.push({ path : '/trainer/trainingsView'});
		},
	}
	,
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
          		.get('rest/trainers/getTrainerById/' + this.user.username, this.user)
          		.then(response => {(this.trainer = response.data)
          		
          			axios
          				.get('rest/trainings/getTrainingsByTrainerId/' + this.trainer.username, this.trainer)
          				.then(response => {(this.trainings = response.data)
          				for(let tr of this.trainings){
							if(tr.type === this.trainingType){
								this.trainingByTypeAndTrainer.push(tr)
							}
						}
          					/*axios
		          				.get('rest/trainings/getTrainingsByTrainingType/' + this.trainingType)
		          				.then(response => {(this.trainings = response.data)*/
		          				
		          					axios
		          						.get('rest/trainingsHistory')
		          						.then(response => this.trainingsHistory = response.data)        				
          				})
          		/*})*/
           })
        })	
    },
});