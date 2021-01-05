class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
      this.body=Bodies.rectangle(x,y,width,height,options);  
      this.width=width;
      this.height=height;
      World.add(world,this.body);
    }
    display(){
        var grou= this.body.position;
        rectMode(CENTER);
        rect(grou.x,grou.y,this.width,this.height)
    }
}