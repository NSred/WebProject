Vue.component("sport-facilities", {
	data: function(){
		return{
			sportFacilities: null
		}
	},
	
	template: `
	<div>
	<h1> Sport Facilities </h1>
	<table border="1">
	
		<tr bgcolor="lightgrey">
			<th><b>Naziv</b></th>
			<th><b>Tip</b></th>
			<th><b>Lokacija</b></th>
			<th><b>Prosecna ocena</b></th>
			<th><b>Radi</b></th>
		</tr>
		
		<tr v-for="sf in sportFacilities">
			<td>{{sf.name}}</td>
			<td>{{sf.type }}</td>
			<td>{{sf.location}}</td>
			<td>{{sf.averageGrade }}</td>
			<td>{{ConvertWorking(sf)}}</td>
		</tr>
		
	</table>
	</div>`,
	methods : {
		ConvertWorking: function(sportFacility) {
			
			if(sportFacility.isWorking===true)
				return "Radi";
				else
				return "Ne radi";
		},
	},
	mounted () {
        axios
          .get('rest/sportFacilities/')
          .then(response => (this.sportFacilities = response.data))
    },
});