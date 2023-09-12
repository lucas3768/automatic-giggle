function preload()  {
    gameover = loadSound("gameover.wav")
    jump = loadSound("jump.wav") 
  coin  = loadSound("coin.wav") 
  kick = loadSound("kick.wav")
  mariodie = loadSound("mariodie.wav") 
  worldstart = loadSound("world_start.wav")
}
function setup() {
    canvas = createCanvas(1240,230)
canvas.parent('canvas')
instializeInSetup(mario)
video = createCapture(VIDEO)
video.size(800,400)
video.parent('gameconsole')
posenet = ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
function draw()  {game()}
function modelloaded() {
    console.log("modelo carregado")
    
}
function gotposes(results) {
    if (results.lentgh > 0) {
        console.log(results)
        Nosex = results [0].pose.nose.x
        Nosey = results [0].pose.nose.y
        
    }
}