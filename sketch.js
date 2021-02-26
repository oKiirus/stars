var stars = []


function setup() {
  createCanvas(windowWidth, windowHeight);
   
    
  
  
}

function draw() {
  background("black");
for(let i = 0; i < stars.length; i++){
  stars[i].display()
  stars[i].move()
}
  

  
 
  
  
  if(frameCount % 1 === 0){
     stars.push(star = new Star(random(0, height), random(1, 8)))
     }

  

  
}

