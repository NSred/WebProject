Vue.component("admin-trainers", {
	data: function(){
		return{
			registeredTrainers: null,
		}
	},
	
	template: `
	
	<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>ADMIN</title>
		
		    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
		
		    <!-- font awesome cdn link  -->
		
		    <!-- custom css file link  -->
		    <link rel="stylesheet" href="css/dataView.css">
		
		</head>
		<body>
	<section class="dishes" id="dishes">
	
	    <h3 class="sub-heading"> Clean Fit </h3>
	    <h1 class="heading"> Registered Trainers </h1>
	    
	    <h2 class ="heading"> Choose type of user to show</h2>
	    <button class="btn" v-on:click="ShowManagers()">Managers</button>
	    <button class="btn" >Trainers</button>
	    <button class="btn" v-on:click="ShowCustomers()">Customers</button>
	
	    <div class="box-container">
	
	        <div class="box" v-for="ru in registeredTrainers">
	            <a href="#" class="fas fa-heart"></a>
	            <a href="#" class="fas fa-eye"></a>
	            <h3>{{ru.name}}</h3>
	            <div>
	            	Type: {{ru.surname}}
	            </div>
	            <h4>{{ru.username}}</h4>
	            <span>{{ru.userRole}}</span>
	            <br></br>
	            <span>{{ConvertBanned(ru)}}</span>
	            <br></br>
	            <div class="btn" v-on:click="deleteTrainer(ru)">Delete</div>
	        </div>
	        
	    </div>
	
	</section>	
		
		</body>
	</html>
	
	`,
	methods : {
		ConvertBanned: function(user) {
			
			if(user.banned===true)
				return "Banovan";
				else
				return "Nije banovan";
		},
		ShowManagers : function(){
			router.push({ path : '/admin/managersView'});
		},
		ShowCustomers : function(){
			router.push({ path : '/admin/customersView'});
		},
		deleteTrainer(m){
			axios
				.delete('rest/trainers/' + m.username)
				.then(response => {toast("USPESO OBRISAN TRAINER")
				
					axios
			          .get('rest/trainers/')
			          .then(response => (this.registeredTrainers = response.data))
				})
				.catch(error => alert(error.message + "GRESKA U BRISANJU TRAINER"))
		}
	},
	mounted () {
        axios
          .get('rest/trainers/')
          .then(response => (this.registeredTrainers = response.data))
    },
});