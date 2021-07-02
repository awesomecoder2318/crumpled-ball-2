class Dustbin{
    constructor(x, y, width, height) {
      this.image = loadImage()
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dbg.png");
        World.add(world, this.body);
      }
        display(){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height)
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width,this.height)
          pop();
        }
  }