class Shape {
    constructor(x,y,r) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':3.0,
        'density':1.0
      }
      this.body = Bodies.polygon(x,y,5,r-27,options);
      this.image = loadImage("shape.png");
      World.add(world, this.body);

      this.r = r;
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();

      if(this.body.speed>= 3){
        this.body.speed = 2;
      }

      
    }
  };
