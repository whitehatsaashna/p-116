lipsx=0;
lipsy=0;
function preload(){
    clownnose=loadImage('https://i.postimg.cc/d0HvbqvW/lips.jpg')
}   
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posNet is initialized');
}
function draw(){
    image(video,0,0,300,300);
    image(clownnose,lipsx,lipsy,20,20);
}
function take_snapshot(){
    save('myFiltre.png');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        lipsx=results[0].pose.lips.x;
        lipsy=results[0].pose.lips.y; 
        console.log("lips x="+results[0].pose.lips.x);
        console.log("lips y="+results[0].pose.lips.y);
    }
}