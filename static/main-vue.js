new Vue({
    el: '#app',
    delimiters: ["//", "//"],
    data: {
        par1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        par2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        lat: '',
        lon: '',
        error: '',
        mapUrl: "",
        locationEnabled: false,
        userCity: "",
        scrollPosition: "",
        dynamicTopMargin: 10  + this.scrollPosition/4.75
      },     
    methods: {          
      onHover1(){
          this.$refs.icon1.innerText = "This is the inner text";
      },
      onLeave1(){
          this.$refs.icon1.innerText = "Icon 1";
        },
      onHover2(){
          this.$refs.icon2.innerText = "This is the inner text";
      },
      onLeave2(){
          this.$refs.icon2.innerText = "Icon 2";
      },
      onHover3(){
        this.$refs.icon3.innerText = "This is the inner text";
      },
      onLeave3(){
          this.$refs.icon3.innerText = "Icon 3";
      },
      onHover4(){
        this.$refs.icon4.innerText = "This is the inner text";
      },
      onLeave4(){
        this.$refs.icon4.innerText = "Icon 4";
        },
      getLocation(){
        this.locationEnabled = !this.locationEnabled;
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.showPosition);
          }
          else{
          this.error = "Geolocation is not supported.";   
          }  
        },
        showPosition(position) {	
           this.lat = position.coords.latitude;
           this.lon = position.coords.longitude;
           this.mapUrl = "https://www.openstreetmap.org/#map=18/"+this.lat+"/"+ this.lon;

           var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.lat + '%2C' + this.lon + '&language=en';

            this.$.getJSON(GEOCODING).done(function(location) {
                console.log(location)
            })
         },
         updateScroll() {
          if(this.scrollPosition < 667){
              this.scrollPosition = window.scrollY;
          }
              
        }
      },
      mounted() {
          window.addEventListener('scroll', this.updateScroll);
        
        
      }
})