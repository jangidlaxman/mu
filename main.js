noseX=0;
noseY=0;
function preload() {
    mustache=loadImage('https://i.postimg.cc/BQS7387N/m.png')
}

function setup() {
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0,0,640,480);
    image(mustache, noseX, noseY,30,30);
}

function take_snapshot() {
    save('student_name.png');
}

function gotPoses(results) {
    if (results.length>0) 
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}