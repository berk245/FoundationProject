new Vue({
    el: '#app',
    delimiters: ["//", "//"],
    data: {
        par1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        par2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        userCity: "",
        scrollPosition: "",
        hover: false,

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
      onHover5(){
        this.$refs.icon5.innerText = "This is the inner text";
      },
      onLeave5(){
        this.$refs.icon5.innerText = "Icon 5";
        },

      updateScroll() {
        if(this.scrollPosition < 630){
            this.scrollPosition = window.scrollY;
        }  
      },
      lowerify(){
        this.userCity = this.userCity.toLowerCase();
      }
      },
      mounted() {
          window.addEventListener('scroll', this.updateScroll);
        
        
      }
})