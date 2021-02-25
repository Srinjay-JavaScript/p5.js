function preload(){
}
function setup(){
    canvas = createCanvas(530,430);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
   video.hide();
    
}
function draw(){
    image(video, 0, 0, 530, 430);
    fill(255, 233, 37);
    circle(0, 0, 200);
    fill(255, 0, 0);
    circle(0, 450, 200);
    fill(0, 100, 255);
    circle(520, 450, 200);
    fill(0, 255, 0);
    circle(520, 0, 200);
    
}
