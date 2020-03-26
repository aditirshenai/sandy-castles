var s1,s2,s4,s5,s6,s7,s8,s9,s10;

function setup(){
  var canvas = createCanvas(1200,1200);

    

    s1 = new Stick(700,320,70,70);
    s2 = new Triangle(920,320,70,70);
    
    s4 = new Stick(810,260,300, PI/2);

    s5 = new Triangle(700,240,70,70);
    s6 = new Triangle(920,240,70,70);
    

    s7 =  new Stick(810,180,300, PI/2);

    s8 = new Stick(810,160,70,70);
    s9 = new Stick(760,120,150, PI/7);
    s10 = new Stick(870,120,150, -PI/7);

}


function draw(){
    background(255)
    
    
    
    
    s1.display();
    s2.score();
    s4.display();

    s5.display();
    s6.display();
    s7.display();
    s8.score();
    s9.display();

    s10.display();
    

      
}