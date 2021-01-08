class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1
            // isStatic :true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed < 5)
        {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(5);
        rect(0, 0, this.width, this.height);
        pop();
      }

      else{
        World.remove(world,this.body);
        push()
        this.visibility = this.visibility -5;
        tint(255,this.visibility);
        pop();
      }
      }
}