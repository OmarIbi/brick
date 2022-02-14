var x = 150;
var y = 80;
var dx = 2;
var dy = 4;
var ctx;
var width;
var height;
var wallPos;
var wallHei;
var wallWid;
rightDown = false;
leftDown = false;
var paddlecolor = "#00FFFF";
var ballcolor = "#e9967a";
var backcolor = "#a0522d";

var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;
var rowcolors = ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"];
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
function init (){
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
width = document.getElementById("canvas").width;
height = document.getElementById("canvas").height;
return setInterval(draw,20);
}
function onKeyDown(evt) {
    if (evt.keyCode == 39) rightDown = true;
    else if (evt.keyCode == 37) leftDown = true;
  }
  function onKeyUp(evt) {
    if (evt.keyCode == 39) rightDown = false;
    else if (evt.keyCode == 37) leftDown = false;
}
//document.addEventListener(keyCode,onkeydown);
//document.addEventListener(keyCode,onkeyup);
   $(document).keydown(onKeyDown);
   $(document).keyup(onKeyUp);
function init_wall() {
    wallPos = width / 2;
    wallHei = 6;
    wallWid = 80;}

function clear(){
    ctx.clearRect(0,0,width,height);
}

function circle(x,y,r)
{
ctx.beginPath();
ctx.arc(x,y,r,0,2 * Math.PI,true);
ctx.closePath();
ctx.fill();

}
function rect(x,y,w,h) {
    //ctx.fillStyle = backcolor;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
    
  }

  function initbricks() {
    NROWS = 5;
    NCOLS = 5;
    BRICKWIDTH = (width/NCOLS) - 1;
    BRICKHEIGHT = 10;
    PADDING = 1;
  
    bricks = new Array(NROWS);
    for (i=0; i < NROWS; i++) {
      bricks[i] = new Array(NCOLS);
      for (j=0; j < NCOLS; j++) {
        bricks[i][j] = 1;
      }
    }
    
  }
  function drawbricks()
  {
    
    for (i=0; i < NROWS; i++) {
        for (j=0; j < NCOLS; j++) {
          if (bricks[i][j] == 1) {
            rect((j * (BRICKWIDTH + PADDING)) + PADDING, 
                 (i * (BRICKHEIGHT + PADDING)) + PADDING,
                 BRICKWIDTH, BRICKHEIGHT);
          }
        
         
        }
        ctx.fillStyle = rowcolors[i];
        
      }
      
     
  }

function draw()
{
ctx.fillStyle = ballcolor;
    clear();
 
    circle(x,y,8);
    if(rightDown) wallPos += 5;

    if(leftDown) wallPos -=5;
    
    
    ctx.fillStyle = backcolor;
     rect(wallPos,height-wallHei,wallWid,wallHei);
     ctx.fillStyle = paddlecolor;
       //draw bricks
 
  drawbricks();
  
  //have we hit a brick?
  rowheight = BRICKHEIGHT + PADDING;
  colwidth = BRICKWIDTH + PADDING;
  row = Math.floor(y/rowheight);
  col = Math.floor(x/colwidth);
  //if so, reverse the ball and mark the brick as broken
  if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
    dy = -dy;
    bricks[row][col] = 0;
      }  
    
      
  
    if(x + dx > width || x + dx < 0 ) 
    dx = -dx;
    if(y + dy < 0)
    dy = -dy;
    else if (y + dy > height){
    if(x > wallPos && x < wallWid + wallPos)
    dy = -dy;
        else     {
          clearInterval();
          wallPos = true;
          ctx.fillStyle= "white";
          ctx.fillRect(0, 0, width, height)
         GameOver();
          
          return
          //ctx.fillRect(0, 0, width, height)
          //ctx.font = "40px Arial";
          //ctx.fillText("you lost try again",0,0);
          /*ctx.fillStyle = "black";
          ctx.fillRect(0, 0, width, height);
          ctx.font = "40px Arial";
          ctx.fillText("you lost try again",1000,1000);*/
     
         //clearInterval(intervalId);
         //app.stage.removeChild(knife);
         //GameOver();
             
        //window.close();
        //app.clear();
    //clearInterval(init);
      
        }
      
    }
    
   
   
    //alert("you lost Try again");
    x += dx;
    y += dy;

}

/*
window.addEventListener('keydown', function (e) {
  var key = e.keyCode;
  if (key === 37)// p key
  {
      togglePause();
  }
  });
function togglePause()
{
    if (!paused)
    {
        paused = true;
    } else if (paused)
    {
       paused= false;
    }

}
  */


 function write() {
 
ctx.textAlign = "start";
   ctx.fillStyle = "red";
  ctx.font = "40px Comic Sans MS";
  ctx.fillText("Game Over",60,80);
 }
function GameOver() {
  write();
  window.open("firstPagee.html", "_self");
  
}


init();
init_wall();
initbricks();