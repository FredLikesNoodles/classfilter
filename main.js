var noseX;
var noseY;
function preload() {
  clownNose = loadImage(
    "https://i.postimg.cc/WzBtJxsv/istockphoto-1192834521-612x612-removebg-preview.png"
  );
}
function setup() {
  canvas = createCanvas(800, 700);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(800, 700);
  video.hide();
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on("pose", gotPoses);
}

function draw() {
  image(video, 0, 0, 800, 700);
  image(clownNose, noseX - 30, noseY - 35, 60, 60);
}

function take_snapshot() {
  save("mypic.png");
}
function modelLoaded() {
  console.log("poseNet model has been loaded");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}
