class Log{

    constructor(x,y,angle){
         var options = {
            isStatic:true,
            friction:1
         }
        this.body = Bodies.rectangle(x,y,250,10,options);
        Matter.Body.setAngle(this.body,angle);
        this.width=250;
        this.height=10;
         World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
          translate(position.x,position.y);
          rotate(angle);
          rectMode(CENTER);
          //fill("yellow");
          strokeWeight(4);
          stroke("brown");
          rect(0,0,this.width,this.height);
         
          pop();
      }
}