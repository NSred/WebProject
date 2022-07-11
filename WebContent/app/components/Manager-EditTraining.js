Vue.component("edit-training",  {
	data: function(){
		return{
			training : {},
			trainers : null,
			param : null,
			selectedTrainer : {}
		}
	},

	template: `
	
	<div class="container2">
      <form @submit.prevent="updateTraining(training)" autocomplete="on">
      <h1><font color="white">Update Training</font></h1>
      
      <!--name-->
    		<div class="box">
          <label for="name" class="fl fontLabel"> Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="name" v-model="training.name"
              placeholder="Name" class="textBox" value="training.name" disabled>
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--Second name-->
   		
    		<!---duration---->
    		<div class="box">
          <label for="openTime" class="fl fontLabel"> Duration: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="number" class="openTime" v-model="training.durationInMinutes" value="training.durationInMinutes">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--duration----->
    		
    		<!---type----->
    		<div class="box">
	          <label for="gender" class="fl fontLabel"> Training type </label>
	    					<select v-model="training.type" value="training.type">
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
    					<input type="textarea" name="description" v-model="training.description"
              placeholder="Name" class="textBox" value="training.description">
    			</div>
    			<div class="clr"></div>
    		</div>

    		<!---Submit Button------>
    		<div class="box" style="background: #2d3e3f">
    				<input type="Submit" name="Submit" class="submit" value="SUBMIT">
    		</div>
    		
      </form>
  </div>
  
  `,
  	methods : {
		updateTraining: function(training) {
				var t = {name : training.name, type : training.type, sportFacilityId : training.sportFacilityId, durationInMinutes : training.durationInMinutes, trainerId  : this.selectedTrainer.username,
						 description : training.description, deleted : false, imageName : training.imageName}
						 
					axios
			          .post('rest/trainings/', t)
			          .then(response => toast("Uspesno azuiran TRAINING MRTVI"))
			          .catch(error =>  {
								alert(error.message + " GRESKA U AZURIRANJU TRAININGA");
							})								
		}
	},
	mounted () {
		this.param=this.$route.params.id;
		axios
          .get('rest/trainers/')
          .then(response => {(this.trainers = response.data)
		        axios
		          .get('rest/trainings/getTrainingById/' + this.param)
		          .then(response => {(this.training = response.data)       
		          	})
		     })
      },
});



