class star{
 
  //construct a star:
  constructor(){
   //show on a random postion:
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(width);
    this.speedU = false;
  }
  
  update(){
    this.z = this.z-speed;
    if(this.z < 1){
      this.x = random(-width,width);
      this.y = random(-height,height);
      this.z = random(width);
    }
  }
  
  show(){
    fill(255);
    noStroke();
    
    let sX = map(this.x/this.z,0,1,0,width);
    let sY = map(this.y/this.z,0,1,0,height);
    
    let r = map(this.z,0,width,10,0)
    ellipse(sX,sY,r,r);
  }
  
}