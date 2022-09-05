class PatternOne{
  
  constructor(diameter){
 
    this.diameter = diameter;
  }
  
  draw(color,cSize){
    this.diameter = cSize;
     this.drawCircleGradient(color);
  }
  drawCircleGradient(color) {
  let radius = this.diameter;
    push();
     colorMode(HSB, color, 100, 100);
    translate(window.innerWidth/2, window.innerHeight/2);
  let h = 0;
  for (let r = radius; r > 0; --r) {
    fill(h, 85, 85);
    
    ellipse(0,0, r,r);
     
    h = lerp(100,10,r/radius);
   
  }
    pop();
}
  
}