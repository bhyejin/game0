let video;
let label = "waiting...";
let classifier;
let face;
let body;

function preload() {
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/17kXdlMWz/model.json');
    face = loadImage('image/01.png');
    body = loadImgae('image/02.png');
}

let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  
  classifyVideo();

  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function classifyVideo() {
    
    classifier.classify(video, gotResults);
}



function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function controlSnake() {
  if (label === 'Left') {
    snake.setDir(-1, 0);
  } else if (label === 'Right') {
    snake.setDir(1, 0);
  } else if (label === 'Down') {
    snake.setDir(0, 1);
  } else if (label === 'Up') {
    snake.setDir(0, -1);
  } 
}

function draw() {
  scale(rez);
  background(220);
  image(video, 0, 0);
  text(label, 10, 50);
  textSize(32);
  fill(255);

  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    print('END GAME');
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function gotResults(error, results) {
  
    if (error) {
      console.error(error);
      return;
    }
    
    label = results[0].label;
    classifyVideo();
}

