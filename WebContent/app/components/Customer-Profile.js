Vue.component("customer-profile", {
	data: function(){
		return{
			user : {},
			customer : {},
			birth : ""
		}
	},

	template: `
	
	<div class="container2">
      <form @submit.prevent="updateCustomer(customer)" autocomplete="on">
      <h1><font color="white">Your profile</font></h1>
        <!--First name-->
    		<div class="box">
          <label for="firstName" class="fl fontLabel"> First Name: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" name="firstName" placeholder="First Name" v-model="customer.name"
              class="textBox" autofocus="on" required value="customer.name">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--First name-->


        <!--Second name-->
    		<div class="box">
          <label for="secondName" class="fl fontLabel"> Last Name: </label>
    			<div class="fl iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="text" required name="lastName" v-model="customer.surname"
              placeholder="Last Name" class="textBox" value="customer.surname">
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
    					v-model="customer.username" value="customer.username" disabled>
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
    					v-model="customer.password" value="customer.password">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Password---->
    		
    		<!---BIRTHDATE---->
    		<div class="box">
          <label for="email" class="fl fontLabel"> Date of birth: </label>
    			<div class="fl iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="date" class="textBox" v-model="customer.birthdate" value="customer.birthdate" required>
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
		updateCustomer: function(customer) {
				var c = {username:customer.username, password:customer.password, name:customer.name, surname:customer.surname,
					birthdate:customer.birthdate, gender:customer.gender, userRole:'CUSTOMER', deleted:false, banned : false, visitedFacilities : customer.visitedFacilities,
					customerType : customer.customerType, collectedPoints : customer.collectedPoints, due : customer.due}
						 
					axios
			          .post('rest/customers/', c)
			          .then(response => toast("Uspesno azuiraran CUSTOMER MRTVI"))
			          .catch(error =>  {
								alert(error.message + " GRESKA U AZUIRANJU CUSTOMERA");
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
	          		.get('rest/customers/getCustomerById/' + this.user.username, this.user)
	          		.then(response => {(this.customer = response.data)
	          		this.birth = this.customer.birthdate
	          		this.birth = new Date(this.birth)
	          		this.birth = this.birth.toLocaleDateString('en-CA')
	          		this.customer.birthdate = this.birth
	    		})
	    	})
    	},
});



