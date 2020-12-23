class Plinko{
    constructor(x,y){
        this.body=Bodies.circle(x,y,10,{isStatic : true});
        World.add(world,this.body);
        this.radius=10;
    }

    display(){
        var pos=this.body.position;
        
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}