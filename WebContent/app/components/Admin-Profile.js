Vue.component("admin-profile", {
	data: function(){
		return{
			user : {},
			admin : {},
			birth : ""
		}
	},

	template: `
	
	<div class="container">
      <form @submit.prevent="updateAdmin(admin)" autocomplete="on">
      <h1>Your profile</h1>
        <!--First name-->
    		<div class="box">
          <label for="firstName" class="fl fontLabel"> First Name: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" name="firstName" placeholder="First Name" v-model="admin.name"
              class="textBox" autofocus="on" required value="admin.name">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--First name-->


        <!--Second name-->
    		<div class="box">
          <label for="secondName" class="fl fontLabel"> Last Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="lastName" v-model="admin.surname"
              placeholder="Last Name" class="textBox" value="admin.surname">
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
    					v-model="admin.username" value="admin.username" disabled>
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
    					v-model="admin.password" value="admin.password">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Password---->
    		
    		<!---BIRTHDATE---->
    		<div class="box">
          <label for="email" class="fl fontLabel"> Date of birth: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="date" class="textBox" v-model="admin.birthdate" value="admin.birthdate" required>
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
		updateAdmin: function(administrator) {
				var a = {username:administrator.username, password:administrator.password, name:administrator.name, surname:administrator.surname,
					birthdate:administrator.birthdate, gender:administrator.gender, userRole:'ADMIN', deleted:false, banned : false}
						 
					axios
			          .post('rest/admins/', a)
			          .then(response => toast("Uspesno azuiraran ADMIN MRTVI"))
			          .catch(error =>  {
								alert(error.message + " GRESKA U AZUIRANJU ADMINA");
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
	          		.get('rest/admins/getAdminById/' + this.user.username, this.user)
	          		.then(response => {(this.admin = response.data)
	          		this.birth = this.admin.birthdate
	          		this.birth = new Date(this.birth)
	          		this.birth = this.birth.toLocaleDateString('en-CA')
	          		this.admin.birthdate = this.birth
	    		})
	    	})
    	},
});



