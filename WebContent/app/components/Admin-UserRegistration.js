Vue.component("admin-userRegistration", {
	data: function(){
		return{
			newUser : {username : "", password : "", name : "", surname : "", birthdate : null, gender  : null, userRole : null, deleted : false, banned : false, sportFacilityId : ""},
			gender : "MALE",
			sportFacilityId : "",
			userRole : "COACH"
		}
	},

	template: `
	
	<div class="container2">
      <form @submit.prevent="createUser(newUser)" autocomplete="on">
      <h1><font color="white">User Registration</font></h1>
        <!--First name-->
    		<div class="box">
          <label for="firstName" class="fl fontLabel"> First Name: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" name="firstName" placeholder="First Name" v-model="newUser.name"
              class="textBox" autofocus="on" required>
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--First name-->


        <!--Second name-->
    		<div class="box">
          <label for="secondName" class="fl fontLabel"> Last Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="lastName" v-model="newUser.surname"
              placeholder="Last Name" class="textBox">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--Second name-->


    		<!---Phone No.------>
    		<div class="box">
          <label for="phone" class="fl fontLabel"> Username: </label>
    			<div class="fl iconBox"><i class="fa fa-phone-square" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="username" maxlength="10" placeholder="Username" class="textBox"
    					v-model="newUser.username">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Phone No.---->

    		<!---Password------>
    		<div class="box">
          <label for="password" class="fl fontLabel"> Password </label>
    			<div class="fl iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="Password" required name="password" placeholder="Password" class="textBox"
    					v-model="newUser.password">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Password---->
    		
    		<!---BIRTHDATE---->
    		<div class="box">
          <label for="email" class="fl fontLabel"> Date of birth: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="date" class="textBox" v-model="newUser.birthdate">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--BIRTHDATE----->

    		<!---Gender----->
    		<div class="box radio">
	          <label for="gender" class="fl fontLabel"> Gender: </label>
	    				<input type="radio" name="Gender" v-model="gender" value="Male" required> Male &nbsp; &nbsp; &nbsp; &nbsp;
	    				<input type="radio" name="Gender" v-model="gender" value="Female" required> Female
    		</div>
    		<!---Gender--->
    		
    		<!---ROLE----->
    		<div>
	          <label for="gender" class="fl fontLabel"> User role </label>
	    					<select v-model="userRole">
								<option value="MANAGER">MANAGER</option>
								<option value="COACH">COACH</option>
							</select> 
    		</div>
    		
    		<!---SPORTFACILITYid----->
    		<div class="box" v-if="userRole === 'MANAGER'">
	          <label for="facilityID" class="fl fontLabel"> FacilityID </label>
	    			<div class="fl iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
	    			<div class="fr">
	    					<input type="text" placeholder="FacilityID" class="textBox" v-model="sportFacilityId">
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
		createUser: function(user) {
			if(this.userRole === "COACH"){
				var trainer = {username:user.username, password:user.password, name:user.name, surname:user.surname,
						birthdate:user.birthdate, gender:this.gender, userRole:this.userRole, deleted:false, banned : false}
				axios
		          .post('rest/trainers/', trainer)
		          .then(response => alert("Uspesno registrovan TRAINER MRTVI"))
		          .catch(error =>  {
							alert(error.message + " GRESKA U REGISTROVANJU TRENERA");
						})	
			}else{
				var manager = {username:user.username, password:user.password, name:user.name, surname:user.surname,
						birthdate:user.birthdate, gender:this.gender, userRole:this.userRole, deleted:false, banned : false, sportFacilityId : this.sportFacilityId}
				axios
		          .post('rest/managers/', manager)
		          .then(response => alert("Uspesno registrovan MANAGER MRTVI"))
		          .catch(error =>  {
							alert(error.message + " GRESKA U REGISTROVANJU MANAGERA");
						})	
			}
		}
	}
});



