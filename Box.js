class Box extends BaseClass {
  
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

  display(){
    image(img,0,0);
    tint (0,153,204);

  }

  score(){
    if(this.visibility<0&&this.visibility-105)
    score++;
  }

};
