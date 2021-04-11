class drops {



constructor(x,y){

    var    options={
        isStatic:false,
        friction:0.1,
        density:1.2
     }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius = radius;
    
   
    
    World.add(myWorld,this.body);







}


display(){

    var pos = this.body.position
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(0,0,this.radius,this.radius);

    




}





}