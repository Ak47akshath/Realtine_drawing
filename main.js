nosex=0
nosey=0
rightwristx=0
leftwristx=0
difference=0




function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,450)
    canvas.position(560,100)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('poseNet is initialized')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx)
        console.log("leftwristx= "+leftwristx+" rightwristx="+ rightwristx)
    }
}

function draw(){
    background("#f29580")
    document.getElementById("square_side").innerHTML="width and height of a square is = "+difference+"px";
    fill('#092fed')
    stroke('#08bf14')
    //square(nosex,nosey,difference)
    circle(nosex,nosey,difference)
    
}
