const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;



function setup(){
    var canvas = createCanvas(410,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(250,590,500,10)


   
   












    //divisions1 = new Divisions(10,465,2,200)
  //  divisions2 = new Divisions(80,465,2,200)
   // divisions3 = new Divisions(150,465,2,200)
   // divisions4 = new Divisions(210,465,2,200)
   /* divisions5 = new Divisions(280,465,2,200)
    divisions6 = new Divisions(330,465,2,200)
    divisions7 = new Divisions(380,465,2,200)





   plinko1  = new plinko(300,200,10,10)
   plinko2  = new plinko(350,200,10,10)
   plinko3  = new plinko(100,200,10,10)
   plinko4  = new plinko(250,200,10,10)
   plinko5  = new plinko(200,200,10,10)
   plinko6  = new plinko(150,200,10,10)
   plinko7  = new plinko(50,200,10,10)

   plinko8  = new plinko(110,100,10,10)   
   plinko9  = new plinko(160,100,10,10)
   plinko10  = new plinko(210,100,10,10)
   plinko11  = new plinko(260,100,10,10)
   plinko12  = new plinko(310,100,10,10)
   plinko13  = new plinko(360,100,10,10)
   plinko14  = new plinko(50,100,10,10)
   plinko15  = new plinko(390,100,10,10)
   plinko16  = new plinko(20,100,10,10)

   plinko17  = new plinko(300,150,10,10)
   plinko18  = new plinko(350,150,10,10)
   plinko19  = new plinko(100,150,10,10)
   plinko20  = new plinko(250,150,10,10)
   plinko21  = new plinko(200,150,10,10)
   plinko22  = new plinko(150,150,10,10)
   plinko23  = new plinko(50,150,10,10)

   plinko24  = new plinko(300,50,10,10)
   plinko25  = new plinko(350,50,10,10)
   plinko26  = new plinko(100,50,10,10)
   plinko27  = new plinko(250,50,10,10)
   plinko28  = new plinko(200,50,10,10)
   plinko29  = new plinko(150,50,10,10)
   plinko30  = new plinko(50,50,10,10)








  // particles = new Particles(300,-10,8,8)*/




}


function draw(){
    background(0,0,0);
    Engine.update(engine);
    ground.display();
   
    

/*if (frameCount%60===0){
        particles.push(new Particles(random(width/2-10,width/2+10),10,10));
    }*/
   


   /* divisions1.display();
    divisions2.display();
    divisions3.display();
    divisions4.display();
    divisions5.display();
    divisions6.display();
    divisions7.display();
    
    particles.display();

    
   


    plinko1 .display();
    plinko2 .display();
    plinko3 .display();
    plinko4 .display();
    plinko5 .display();
    plinko6 .display();
    plinko7 .display();
    plinko8 .display();
    plinko9 .display();
    plinko10 .display();
    plinko11 .display();
    plinko12 .display();
    plinko13 .display();
    plinko14 .display();
    plinko15 .display();
    plinko16 .display();
    plinko17 .display();
    plinko18 .display();
    plinko19 .display();
    plinko20 .display();
    plinko21 .display();
    plinko22 .display();
    plinko23 .display();
    plinko24 .display();
    plinko25 .display();
    plinko26 .display();
    plinko27 .display();
    plinko28 .display();
    plinko29 .display();
    plinko30 .display();*/

    
  
   
    
    for (var k = 0; k <=width; k = k + 80){
        divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
    }
    

}
