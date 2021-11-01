const app = new Vue({
    el: "#app",
    data: {
       counter:0,
        slides : [
            {
                title: 'svezia',
                image: 'img/01.jpg',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title: 'Svizzera',
                image: 'img/02.jpg',
                text:  'Lorem ipsum',
            },
            {
                title: 'Gran Bretagna',
                image: 'img/03.jpg',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Germania',
                image: 'img/04.jpg',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                title: 'Paradise',
                image: 'img/05.jpg',
                text:  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
        timer:"",
    },
    methods: {
        clickUp(){
           // console.log('ciao'); 
          this.counter--; 
          
           if (this.counter < 0){
               this.counter= 4;
           }
        },
        clickDown(){
           // console.log('ciao');
           this.counter++;
           if (this.counter == 4){
            this.counter = 0;
    
        }

      },
      autoPlay(){
        this.timer =  setInterval(()=>{
              this.clickDown(); {
         }}, 3000);
      },
     
    
      }
     
    
})



