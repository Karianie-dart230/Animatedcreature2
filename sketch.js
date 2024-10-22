
let y= 200;
let a = 290;
let b = 120;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(101, 155, 171);
  
  //ground
  fill(14, 107, 28);
  rect(0,300, 400,100);
  fill(120, 13, 24, 235);
  
  //sun
  fill(227, 221,50);
  ellipse(40,y, 150);
  

   y = y-1;
  
  fill(104, 13, 143)
  strokeWeight(5)
  ellipse(200,200,100,150);
  strokeWeight(5);
  stroke(60, 12, 77)
  
  
  line(250,190, a,b)
  
  a = a +2;
  b = b +2;
  console.log(a, b);
  
  if(a >300)
    {
      a = 290;
    }
  
  if (b > 135)
    {
      b = 120;
    }

  fill(104, 13, 143)
  rect(170,100,60,60,10)
 
  fill(8, 15, 18)
  ellipse(185,120,10,10)
  ellipse(215,120,10,10)
 
  ellipse(200,135,30,10)
  ellipse(200,200,100,40)
  
  line(150,183,85,150)
  
}