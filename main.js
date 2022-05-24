function preload() {

}
function setup() {
canvas = createCanvas(600,400);
canvas.center();
video= createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
image(video,0,0,600,400);
tint(tint_color);
}

function take_snapshot() {
    save ("image.png");
}

function Filter_color() {
    tint_color= document.getElementById("color_name").value ;
}