const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

let snake = [];

snake[0]={
  x:9*box,
  y:10*box
};

let food = {
  x:Math.floor(Math.random()*17+1)*box,
  y:Math.floor(Math.random()*15+3)*box
}

//let score = 0;

let d;
document.addEventListener("keydown", direction);

function direction(event)
{
  let key = event.keyCode;
  //a strict comparision(===)is only true if the operands are of the same type and the contents match
  //abstract comparision== converts the operands to the same type before making the comparision
  if(key == 37 && d != "RIGHT")
  {
  d = "LEFT";
  }
  else if (key == 38 && d != "DOWN")
  {
    d = "UP";
  }
  else if (key == 39 && d != "LEFT")
  {
   d = "RIGHT";
  }
  else if (key == 40 && d != "UP")
  {
   d = "DOWN";
  }
}

function collision(head,array)
{
for(let i= 0; i<array.length; i = i+1)
{
if(head.x == array[i].x && head.y == array[i].y)
{
return true;
}

}
return false;
}

function setup() {
  createCanvas(608,608);
 
//function varTest() { var x = 1; 
//{ var x = 2; 
// same variable! console.log(x); 
// 2 } console.log(x); 
// 2 }

//function letTest() { let x = 1; { let x = 2;
 // different variable console.log(x); 
 // 2 } console.log(x); 
 // 1 }
}


function draw() {
  background(0,0,0);  
  for(let i = 0; i < snake.length; i++)
 { 
   if(i == 0)
   {fill("green");
  }
  else{
    fill("white");
  }
  rect(snake[i].x,snake[i].y,box,box);
  fill("red");
  rect(food.x,food.y,box,box);
 }

 //old head position for snake

 let snakeX = snake[0].x;
 let snakeY = snake[0].y;

 //which direction 
 if (d == "LEFT")
 {
snakeX = snakeX - box;
 }

 if (d == "UP")
 {
snakeY = snakeY - box;
 }

 if (d == "RIGHT")
 {
snakeX = snakeX + box;
 }

 if (d == "DOWN")
 {
snakeY = snakeY + box;
 }

 //if snake eats the food what should happen
 if(snakeX == food.x && snakeY == food.y)
 {
ctx.fillStyle = "blue";
ctx.fontSize = "45px";
ctx.fillText("SWALLOWED YOU...STOMACH FULL",10*box, 18*box);
food = {
  x : Math.floor(Math.random()*17+1) * box,
  x : Math.floor(Math.random()*15+3) * box,
}
 }
 else{
   snake.pop();
 }
 let newHead = {
   x : snakeX,
   y : snakeY
 }
 if (snakeX <box || snakeX > 17 * box || snakeY <3*box || snakeY > 17*box || collision(newHead, snake)){
  clearInterval(game);
 }
 
snake.unshift(newHead);
 
}






