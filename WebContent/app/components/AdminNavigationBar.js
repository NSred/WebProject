Vue.component("admin-navigation", {
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
        <a href="#/admin"><h1 class="logo">Clean<span style="color:#273b91;">FIT</span></h1></a>
        <i class="menu-toggle-btn fas fa-bars"></i>
        <nav class="navigation-menu">
          <a href="#/admin"><i class="fas fa-home home"></i> Home</a>
          <a href="#/admin/createFacility"></i> Facilities</a>
          <a href="#/admin/userRegistration"></i> Register</a>
          <a href="#/admin/usersView"></i> All users</a>
          <a href="#"></i> Contact</a>
          <a href="#/login" class="aj_btn"> <i class="fas fa-lock" aria-hidden="true"></i>
            LOG OUT</a>
        </nav>
      </div>
      </header>
     </body>
</html>
	`,
});
