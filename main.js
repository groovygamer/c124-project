function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

  canvas = creatCanvas(550,500);
  canvas.position(550,150);

  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
 }

 function modelLoaded()
 {
    console.log("Hey bro pose net is ready");
 }

 function gotPoses(results)
 {
    if(results.length > 0)
    {
        console.log(results)
    }
 }
