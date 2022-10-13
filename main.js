song ="";
song2 ="";
Lwristx =0;
Lwristy = 0;
scoreleftwrist= 0;
scoreRightwrist =0;
songstatus = "";
song2status = "";
Rwristx = 0;
Rwristy = 0;



function preload()
{
    song =loadSound("music.mp3");
    song2 =loadSound("music2.mp3");
}

function setup()
{
    canvas= createCanvas(800,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modalLoaded);
    poseNet.on('pose' , gotposes);
}

function play()
{
song2.play();

}
function  modalLoaded()
{
console.log("Modal  is loaded !!!" );
}



function gotposes(result)
{
if(result.length > 0)
{
    console.log(result);
Lwristx = result[0].pose.leftWrist.x;
console.log( "Left Wrist X ==" + Lwristx);
scoreleftwrist = result[0].pose.keypoints[9].score;
console.log( "score of left wrist =" + scoreleftwrist);


Rwristx = result[0].pose.rightWrist.x;
console.log("Right Wrist X ==" + Rwristx);
scoreRightwrist = result[0].pose.keypoints[9].score;
console.log( "score of right wrist =" + scoreRightwrist);

}}

function draw()
{
    image(video,0,0,800,500);
    songstatus =  song.isPlaying();
    song2status =  song2.isPlaying();
    console.log( "song1 status =" + songstatus + "  " + "song2 status =" + song2status);

     if (scoreleftwrist >= 0.2)   //if left wrist  is shown 
     {
        song.play(); 
        song2.stop();// Song 2 will stop
        document.getElementById("songName").innerHTML = "Harry Potter song is playing" ;
    } 
        else //if Right wrist is shown 
        {
         song2.play(); 
          song.stop(); 
          document.getElementById("songName").innerHTML = "Peter Pan song is playing" ;
               // Song 1 will stop 
        }

    }
    

  


