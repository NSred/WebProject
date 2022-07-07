Vue.component("manager-training", {
	data: function(){
		return{
			trainers : null,
			user : {},
			manager : {},
			selectedTrainer : {},
			newTraining : {name : "", type : "", sportFacilityId : "", durationInMinutes : null, trainerId  : "", description : "", deleted : false, imageName : ""},
			facilityContent : [],
			trainingsInFacility : null,
			sameName : false
		}
	},

	template: `
	
	<div class="container">
      <form @submit.prevent="createTraining(newTraining)" autocomplete="on">
      <h1>Create Training</h1>
      
      <!--name-->
    		<div class="box">
          <label for="name" class="fl fontLabel"> Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="name" v-model="newTraining.name"
              placeholder="Name" class="textBox">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--Second name-->
   		
    		<!---duration---->
    		<div class="box">
          <label for="openTime" class="fl fontLabel"> Duration: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="number" class="openTime" v-model="newTraining.durationInMinutes">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--duration----->
    		
    		<!---type----->
    		<div class="box">
	          <label for="gender" class="fl fontLabel"> Training type </label>
	    					<select v-model="newTraining.type">
								<option value="Personal trainings">Personal trainings</option>
								<option value="Group trainings">Group trainings</option>
								<option value="Sauna">Sauna</option>
							</select>
							
							<br></br>
    		</div>
    		
    		<!---trainers----->
    		<div class="box">
	          <label for="gender" class="fl fontLabel"> Choose trainer </label>
	    					<select v-model="selectedTrainer.username">
	    						<template v-for="t in trainers">
									<option :value="t.username">
										{{t.name}} &nbsp {{t.surname}}
									</option>
								</template>
							</select>
							
							<br></br>
    		</div>
    		
    		<!---description----->
			<div class="box">
          <label for="description" class="fl fontLabel"> Description: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="textarea" name="description" v-model="newTraining.description"
              placeholder="Name" class="textBox">
    			</div>
    			<div class="clr"></div>
    		</div>
    		
    		<div class="box">
    			<label for="fajl" class="fl fontLabel"> Select logo: </label>
	    			<input type="file" id="filee" v-on:change="loadFile">
    		</div>

    		<!---Submit Button------>
    		<div class="box" style="background: #2d3e3f">
    				<input type="Submit" name="Submit" class="submit" value="SUBMIT">
    		</div>
    		
      </form>
  </div>
  
  `,
  	methods : {
		createTraining: function(training) {
				var t = {name : training.name, type : training.type, sportFacilityId : this.manager.sportFacilityId, durationInMinutes : training.durationInMinutes, trainerId  : this.selectedTrainer.username,
						 description : training.description, deleted : false, imageName : ""}
						 
				for(let tr of this.trainingsInFacility){
					if(tr.name === training.name){
						this.sameName = true;
						break;
					}
				}
				if(this.sameName === false){
					axios
			          .post('rest/trainings/', t)
			          .then(response => toast("Uspesno kreiran TRAINING MRTVI"))
			          .catch(error =>  {
								alert(error.message + " GRESKA U KREIRANJU TRAININGA");
							})
					} else{
						alert("VEC POSTOJI TAKAV TRENING!")
						this.sameName = false;
					}
						
				/*this.selectedManager.sportFacilityId = facility.sportFacilityId
				axios
				  .put('rest/sportFacilities', this.selectedManager)
				  .then(response => alert("Uspesno azuriran facility"))
				  .catch(error =>  {
							alert(error.message + " GRESKA U AZURIRANJU FACILITIJA");
						})	*/					
		},
		redirectToRegistration : function(){
			router.push({ path : '/admin/userRegistration'});
		},
		loadFile : function(event){
			var selectedFile = document.getElementById('filee');
			selectedFile.src = URL.createObjectURL(event.target.files[0]);
			console.log(selectedFile.value)
		}
	},
	mounted () {
        axios
          .get('rest/trainers/')
          .then(response => {(this.trainers = response.data)
          		axios
		          .get('rest/login/loggedUser')
		          .then(response => {(this.user = response.data)
		          		
		          	axios
		          		.get('rest/managers/getManagerById/' + this.user.username, this.user)
		          		.then(response => {(this.manager = response.data)
		          		
		          			axios
		          				.get('rest/trainings/getTrainingsByFacilityId/' + this.manager.sportFacilityId, this.manager)
		          				.then(response => (this.trainingsInFacility = response.data))
		          		})	
		    		})
		    	})
    		},
});



