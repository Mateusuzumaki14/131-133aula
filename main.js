var capImg='';
var status=''
function preload() {
    capImg=loadImage('dog_cat.jpg')
}
function setup() {
    canvas=createCanvas(700,450);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML='status:detectando objetos';
}

function modelLoaded() {
    console.log('modelo carregado');
    status=true;
    objectDetector.detect(capImg,gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    console.log(results)
}
function draw() {
    image(capImg,0,0,699,449);
    fill('green');
    text('dog',170,50); 
    noFill();
    stroke('red');
    rect(160,30,180,350);

    fill('blue');
    text('cat',350,50);
    noFill();
    stroke('green');
    rect(350,30,300,350);
}
