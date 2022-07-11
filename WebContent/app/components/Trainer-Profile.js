Vue.component("trainer-profile", {
	data: function(){
		return{
			user : {},
			trainer : {},
			birth : ""
		}
	},

	template: `
	
	<div class="container2">
      <form @submit.prevent="updateTrainer(trainer)" autocomplete="on">
      <h1><font color="white">Your profile</font></h1>
        <!--First name-->
    		<div class="box">
          <label for="firstName" class="fl fontLabel"> First Name: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" name="firstName" placeholder="First Name" v-model="trainer.name"
              class="textBox" autofocus="on" required value="trainer.name">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--First name-->


        <!--Second name-->
    		<div class="box">
          <label for="secondName" class="fl fontLabel"> Last Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="lastName" v-model="trainer.surname"
              placeholder="Last Name" class="textBox" value="trainer.surname">
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
    					v-model="trainer.username" value="trainer.username" disabled>
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
    					v-model="trainer.password" value="trainer.password">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Password---->
    		
    		<!---BIRTHDATE---->
    		<div class="box">
          <label for="email" class="fl fontLabel"> Date of birth: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="date" class="textBox" v-model="trainer.birthdate" value="trainer.birthdate" required>
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
		updateTrainer: function(trainer) {
				var t = {username:trainer.username, password:trainer.password, name:trainer.name, surname:trainer.surname,
					birthdate:trainer.birthdate, gender:trainer.gender, userRole:'COACH', deleted:false, banned : false}
						 
					axios
			          .post('rest/trainers/', t)
			          .then(response => toast("Uspesno azuiraran TRAINER MRTVI"))
			          .catch(error =>  {
								alert(error.message + " GRESKA U AZUIRANJU TRAINERA");
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
	          		.get('rest/trainers/getTrainerById/' + this.user.username, this.user)
	          		.then(response => {(this.trainer = response.data)
	          		this.birth = this.trainer.birthdate
	          		this.birth = new Date(this.birth)
	          		this.birth = this.birth.toLocaleDateString('en-CA')
	          		this.trainer.birthdate = this.birth
	    		})
	    	})
    	},
});



