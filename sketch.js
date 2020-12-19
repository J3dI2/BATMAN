var rain, man;
var maxDrops=100;

function preload(){

}

function setup(){
    createCanvas(500,900);

    rain = new Drops();
    man = new Umbrella();
}

function draw(){
    background('black');

    for(var i=0; i<maxDrops; i++){
        rain.push(new createDrop(random(0,400), random(0,400)));
    }

    if(frameCount % 12 ===0){
        var lightning = createSprite(random(50,150),100,25,25);
        var light = Math.round(random(1,4));
        switch(light){
            case 1: lightning.addImage("1.png");
                break;
            case 2: lightning.addImage("2.png");
                break;
            case 3: lightning.addImage("3.png");
                break;
            case 4: lightning.addImage("4.png");
                break;
            default: break;
        }
    }

    rain.display();
    man.display();

    drawSprite();
}