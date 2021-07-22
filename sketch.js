



function preload(){

}


function setup() {
  createCanvas(1920,1080);
  b1 = createButton("BLUE");
  b1.position(600 , 100);
  b1.mousePressed(bluebg);

  b2 = createButton("GREEN");
  b2.position(400, 400);
  
}


function bluebg(){
  r =  0 ;
  b =  255 ;
  g = 0 ;
}

function greenbg (){
  background("green")
}









function draw(){
  background("RED")
  b2.mousePressed(greenbg);
}




 