Vue.component("admin-createFacility", {
	data: function(){
		return{
			managers : null,
			selectedManager : {},
			newFacility : {sportFacilityId : "", name : "", type : null, facilityContent : null, isWorking : false, location  : "", averageGrade : 0.0, openTime : null, closeTime : null, imageName : ""},
			facilityContent : [],
		}
	},

	template: `
	
	<div class="container">
      <form @submit.prevent="createFacility(newFacility)" autocomplete="on">
      <h1>Create Facility</h1>
        <!--sportFacilityId-->
    		<div class="box">
          <label for="sportFacilityId" class="fl fontLabel"> Facility ID: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" name="sportFacilityId" placeholder="Facility ID" v-model="newFacility.sportFacilityId"
              class="textBox" autofocus="on" required>
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--First name-->


        <!--name-->
    		<div class="box">
          <label for="name" class="fl fontLabel"> Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="name" v-model="newFacility.name"
              placeholder="Name" class="textBox">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--Second name-->


    		<!---location------>
    		<div class="box">
          <label for="location" class="fl fontLabel"> Location: </label>
    			<div class="fl iconBox"><i class="fa fa-phone-square" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="location" placeholder="Location" class="textBox"
    					v-model="newFacility.location">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Phone No.---->
    		
    		<!---openTIme---->
    		<div class="box">
          <label for="openTime" class="fl fontLabel"> Open Time: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="time" class="openTime" v-model="newFacility.openTime">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--openTIme----->
    		
    		<!---closeTime---->
    		<div class="box">
          <label for="closeTime" class="fl fontLabel"> Close Time: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="time" class="closeTime" v-model="newFacility.closeTime">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--closeTIme----->

    		<!---working----->
    		<div class="box radio">
	          <label for="isWorking" class="fl fontLabel"> Gender: </label>
	    				<input type="radio" name="Working" v-model="newFacility.isWorking" value="true"> Working &nbsp; &nbsp; &nbsp; &nbsp;
	    				<input type="radio" name="Not working" v-model="newFacility.isWorking" value="false"> Not working
    		</div>
    		<!---working--->
    		
    		<!---type----->
    		<div>
	          <label for="gender" class="fl fontLabel"> Facility type </label>
	    					<select v-model="newFacility.type">
								<option value="GYM">GYM</option>
								<option value="POOL">POOL</option>
								<option value="SPORTCENTER">SPORT CENTER</option>
								<option value="DANCINGSTUDIO">DANCING STUDIO</option>
								<option value="BOWLINGCENTER">BOWLING CENTER</option>
								<option value="SHOOTINGRANGE">SHOOTING RANGE</option>
							</select>
							
							<br></br>
    		</div>
    		
    		<!---CONTENT----->
			<div>
				<input type="checkbox" name="pl" value="Personal trainings">
				<label for="Personal"> Personal trainings</label><br>
				<input type="checkbox" name="pl" value="Group trainings">
				<label for="Group"> Group trainings</label><br>
				<input type="checkbox" name="pl" value="Sauna">
				<label for="Sauna"> Sauna </label><br>
			</div>
			
			<!---manager of facility----->
    		<div class="box">
	          <label for="gender" class="fl fontLabel"> Manager </label>
      				<template>
    					<select  v-model="selectedManager">
    						<template v-for="m in managers">
    							<template v-if="m.sportFacilityId === ''">
									<option :value="m">											
											{{m.name}} &nbsp {{m.surname}}											
									</option>
								</template>
							</template>
						</select>
					</template>
						</select>
					
							
					<button style="background: #2a6e3e" v-on:click="redirectToRegistration()">Add new manager</button>
					<br></br>
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
		createFacility: function(facility) {
				var markedCheckbox = document.getElementsByName('pl');  
				for (var checkbox of markedCheckbox) {  
				  if (checkbox.checked)  
				    this.facilityContent.push(checkbox.value); 
				}
				var f = {sportFacilityId : facility.sportFacilityId , name : facility.name, type : facility.type, facilityContent : this.facilityContent, isWorking : facility.isWorking,
				 location  : facility.location , averageGrade : 0.0, openTime : facility.openTime, closeTime : facility.closeTime, imageName : ""}
				axios
		          .post('rest/sportFacilities/', f)
		          .then(response => alert("Uspesno kreiran FACILITY MRTVI"))
		          .catch(error =>  {
							alert(error.message + " GRESKA U REGISTROVANJU FACILITIJA");
						})
						
				this.selectedManager.sportFacilityId = facility.sportFacilityId
				axios
				  .put('rest/managers', this.selectedManager)
				  .then(response => alert("Uspesno azuriran menadzer"))
				  .catch(error =>  {
							alert(error.message + " GRESKA U AZURIRANJU MENADZERA");
						})						
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
          .get('rest/managers/')
          .then(response => (this.managers = response.data))	
    }
});



