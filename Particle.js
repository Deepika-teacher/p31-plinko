class Particle{
    constructor(x,y){
        this.body=Bodies.circle(x,y,10,{isStatic : false});
        this.colour=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        this.radius=10;
    }

    display(){
        var pos=this.body.position;
        var ang=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(ang);
        fill("white");
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}