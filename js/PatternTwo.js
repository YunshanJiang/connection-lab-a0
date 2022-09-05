class PatternTwo{
  
  constructor(x, y, iw,w, num){
    this.x = x;
    this.y = y;
    this.iw = iw;
    this.w = w;
    this.num = num;
   
  }
  
  draw(_size){
    
    this.w = _size;
    for (let i = 0; i < this.num;i++){
      let degree = lerp(0, 360, i/(this.num - 1));
      push();
      fill(220, 255,0);
      
      translate(window.innerWidth/2, window.innerHeight/2);
      
      rotate(degree + frameCount * 0.1);
      //rect(cos(radian)*this.iw,  sin(radian)*this.iw, this.w, this.w/10);
      rect(this.iw*1.5,  0, this.w, this.w/30);
      pop();
     
    }
    
  }

}