class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
       
        this.body=Bodies.circle(x,y,this.radius,options);
        this.radius=radius;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,this.radius,this.radius);
      }
};