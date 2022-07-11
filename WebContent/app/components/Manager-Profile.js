Vue.component("manager-profile", {
	data: function(){
		return{
			user : {},
			manager : {},
			birth : ""
		}
	},

	template: `
	
	<div class="container2">
      <form @submit.prevent="updateManager(manager)" autocomplete="on">
      <h1><font color="white">Your profile</font></h1>
        <!--First name-->
    		<div class="box">
          <label for="firstName" class="fl fontLabel"> First Name: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" name="firstName" placeholder="First Name" v-model="manager.name"
              class="textBox" autofocus="on" required value="manager.name">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--First name-->


        <!--Second name-->
    		<div class="box">
          <label for="secondName" class="fl fontLabel"> Last Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="lastName" v-model="manager.surname"
              placeholder="Last Name" class="textBox" value="manager.surname">
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
    					v-model="manager.username" value="manager.username" disabled>
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Phone No.---->

    		<!---Password------>
    		<div class="box">
          <label for="password" class="fl fontLabel"> Password </label>
    			<div class="fl iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="password" placeholder="Password" class="textBox"
    					v-model="manager.password" value="manager.password">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Password---->
    		
    		<!---BIRTHDATE---->
    		<div class="box">
          <label for="email" class="fl fontLabel"> Date of birth: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="date" class="textBox" v-model="manager.birthdate" value="manager.birthdate" required>
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--BIRTHDATE----->

    		<!---Submit Button------>
    		<div class="box" style="background: #2d3e3f">
    				<input type="Submit" name="Submit" class="submit" value="SUBMIT">
    		</div>    		
      </form>
  </div>
  
  `,
  	methods : {
		updateManager: function(manager) {
				var m = {username:manager.username, password:manager.password, name:manager.name, surname:manager.surname,
					birthdate:manager.birthdate, gender:manager.gender, userRole:'MANAGER', deleted:false, banned : false, sportFacilityId : manager.sportFacilityId}
						 
					axios
			          .post('rest/managers/', m)
			          .then(response => toast("Uspesno azuiraran MANAGER MRTVI"))
			          .catch(error =>  {
								alert(error.message + " GRESKA U AZUIRANJU MANAGERA");
							})									
		},
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
	          		.get('rest/managers/getManagerById/' + this.user.username, this.user)
	          		.then(response => {(this.manager = response.data)
	          		this.birth = this.manager.birthdate
	          		this.birth = new Date(this.birth)
	          		this.birth = this.birth.toLocaleDateString('en-CA')
	          		this.manager.birthdate = this.birth
	    		})
	    	})
    	},
});



