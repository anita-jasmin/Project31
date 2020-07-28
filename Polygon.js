class Polygon {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,

      }
      this.body = Bodies.circle(x,y,radius);
      this.radius=radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("#D1F2EB");
      ellipse(pos.x, pos.y, this.radius,this.radius);
    }
  };
