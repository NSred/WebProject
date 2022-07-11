Vue.component("trainer-navigation", {
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
        <a href="#/trainer"><h1 class="logo">Clean<span style="color:#273b91;">FIT</span></h1></a>
        <i class="menu-toggle-btn fas fa-bars"></i>
        <nav class="navigation-menu">
          <a href="#/trainer"><i class="fas fa-home home"></i> Home</a>
          <a href="#/trainer/trainingsView"></i> Your trainings</a>
          <a href="#/trainer/myProfile"></i> My Profile</a>
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
