class Drops{
    constructor(x,y){
        options = {
            'friction': 0.1
        }
    }
    display(){
    
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}