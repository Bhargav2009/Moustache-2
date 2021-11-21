nosex=0;
nosey=0;

function preload()
{
    nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
  image(video, 0, 0, 640, 480);
  image(nose,nose_x,nose_y,60,45);
}

function take_snapshot()
{
    save('MyMoustachePicture.png');
}

function modelLoaded()
{
  console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    nosex = results[0].pose.nose.x+120
    nosey = results[0].pose.nose.y+160
    
  }
}