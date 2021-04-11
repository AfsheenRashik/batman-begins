const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var myEngine, myWorld;
var rain=[];
var maxDrops = 100;
function preload(){
    
}

function setup(){
    var canvas = createCanvas(800,900);

    myEngine = Engine.create();
	myWorld= myEngine.world;

for (i=100;i>maxDrops;i++){

    rain.push(new drops(random(0,400),random(0,400)))
}





    
    Engine.run(myEngine);
  
}

function draw(){
    background (0);
    ellipseMode(RADIUS);

    for(i=0;i>maxDrops;i++){
rain[i].display();
    }
}   

