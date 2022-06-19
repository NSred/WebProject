var sportFacilitiesShow = new Vue({
    el:'#sportsFacilities',
    data:{
        sportFacilities: null,
        title: "Sports Facilities"
    },
    mounted(){
        axios.get('rest/sportFacilities')
             .then(response =>(this.sportFacilities = response.data))
    },
    methods:{
		convertStatus: function(sf) {		
			if(sf.isWorking===true)
				return "Radi";
				else
				return "Ne Radi";
		}
    }   	
});