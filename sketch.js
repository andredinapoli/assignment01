function setup() {
  createCanvas(800, 600)
  strokeWeight (2)
}

function draw() {
 
  background(204,204,204)
  stroke(104,104,104)
  
  //neck
  line (405,220,405,290)
  line (395,220,395,290)
  line (385,220,385,290)
  
  //antennas
  line (430,183,465,190)
  line (400,140,415,80)
  line (355,140,375,160)
  
  
  //head
  noStroke()
  
  fill(0,0,0)
  ellipse (395,180,90,90)
  
  //eye
  fill(250,250,250)
  ellipse (408,172,28,28)
  
  fill(0,0,0)
  ellipse (408,172,6,6)
  
  fill(154,154,154)
  ellipse (383,170,10,10)
  
  fill(154,154,154)
  ellipse (415,152,8,8)
  
  fill(154,154,154)
  ellipse (426,183,6,6)
  
  
  //body
  noStroke()
  
  fill(104,104,104)
  ellipse (380,410,70,70)
  
  fill(0,0,0)
  rect(335,290,90,120)
  
  fill(104,104,104)
  rect(335,307,90,7)
  
  
  
}