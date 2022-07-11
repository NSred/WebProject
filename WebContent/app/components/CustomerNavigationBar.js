Vue.component("customer-navigation", {
	data : function(){
		return{
			logOutMessage : ""	
		}
	},
	template: `
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>CleanFit</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <div class="inner-width">
        <a href="#/customer"><h1 class="logo">Clean<span style="color:#273b91;">FIT</span></h1></a>
        <i class="menu-toggle-btn fas fa-bars"></i>
        <nav class="navigation-menu">
          <a href="#/customer"><i class="fas fa-home home"></i> Home</a>
          <a href="#/customer/dues"></i> Membership</a>
          <a href="#/customer/trainingsView"></i> Trainings</a>
          <a href="#/customer/myProfile"></i> My Profile</a>
          <a href="#/login" class="aj_btn" v-on:click="logOut()"> <i class="fas fa-lock" aria-hidden="true"></i>
            LOG OUT</a>
        </nav>
      </div>
      </header>
     </body>
</html>
	`,
	methods : {
		logOut : function(){
			axios
				.post('rest/login/logOut')
				.then(response => {this.logOutMessage = response.data
								toast(this.logOutMessage)
				})
		}
	}
});
