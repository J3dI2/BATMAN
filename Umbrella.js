class Umbrella{
    constructor(x,y){
        options={
            'friction': 0.1
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,options)
        World.add(world,this.body);
        this.image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    }
    display(){
        push();
        imageMode(CENTER);
        pop();
    }

}