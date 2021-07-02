class Paper{
    constructor(x,y,diameter){
    var options = {
        isStatic: false,
    restitution:0.3,
    density:1.2,
    friction:0.5
}

this.body=Bodies.circle(x,y,diameter)
this.diameter=diameter
this.image = loadImage("sprites/pp.png");

World.add(world,this.body)

    }
    display(){

        var pos =this.body.position;

        push();
        imageMode(CENTER)
        image(this.image,0,0, this.diameter)
        fill(255)
        ellipse(0,0,this.diameter);
        pop();
    }
}