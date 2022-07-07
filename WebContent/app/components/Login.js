Vue.component("login-user", {
	data: function(){
		return{
			users: null,
			user : {username : "", password: ""},
			username : "",
			password : "",
			logged : true,
		}
	},
	template: `
	
	<div class="container">
      <form @submit.prevent="LogIn" autocomplete="on">
      <h1>Log In</h1>
      
        <!--Username-->
    	<div class="box">
          <label for="username" class="fl fontLabel"> Username: </label>
    			<div class="new iconBox">
            <i class="fa fa-user" aria-hidden="true"></i>
          </div>
    			<div class="fr">
    					<input type="text" name="username" placeholder="Username" v-model="user.username"
              class="textBox" autofocus="on" required>
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!--Username-->
    		
    		<!---Password------>
    		<div class="box">
          <label for="password" class="fl fontLabel"> Password </label>
    			<div class="fl iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
    			<div class="fr">
    					<input type="Password" required name="password" placeholder="Password" class="textBox"
    					v-model="user.password">
    			</div>
    			<div class="clr"></div>
    		</div>
    		<!---Password---->
    		
    		<!---Submit Button------>
    		<div class="box" style="background: #2d3e3f">
    				<input type="Submit" name="Submit" class="submit" value="SUBMIT" v-on:click="Redirect()"> 

    		</div>
    		<!---Submit Button----->
    		
    		<tr>
					<td><a href="#/register">Not Registered?</a></td>
				</tr>
	
	 </form>
  </div>
	`,
	methods : {
		LogIn: function() {
			axios
				.post('rest/login/logInStatus', this.user)
				.then(response => {							
					toast("Uspesno logovan korisnik MRTVI")
					axios
						.get('rest/login/loggedUser')
						.then(response => {
							if(response.data){
								this.user = response.data
								this.Redirect()
							}else{
								this.user = {username: this.username, "password" : this.password}
							}
														
						})	
						
					})					
		},
		Redirect : function(){
			if(this.user.userRole !== undefined){
				if(this.user.userRole === "ADMIN"){
					router.push({ path : 'admin'});
				} else if(this.user.userRole === "MANAGER"){
					router.push({ path : "manager"});
				} else if(this.user.userRole === "COACH"){
					router.push({ path : "trainer"});
				} else if(this.user.userRole === "CUSTOMER"){
					router.push({ path : "customer"});
				}  
			}
		}
	},
	
});
