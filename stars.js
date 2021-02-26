class Star {
  
    constructor(y, r){
      this.y = y
      this.r = r
      this.x = -10
    }
    
    display(){
      noStroke()
      fill(255)
      ellipse(this.x, this.y, this.r)
    }
    
    move(){
      this.x += this.r / 3
      
    }
  }