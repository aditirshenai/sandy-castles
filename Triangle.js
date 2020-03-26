class Triangle extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     this.body.speed < 3
         pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  