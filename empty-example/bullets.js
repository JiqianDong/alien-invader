function Bullet(x,y){
    
    this.x    = x;
    this.y    = y;

    this.r    = 18;
    this.show = function(){

        fill("Gold");
        noStroke();
        ellipse(this.x,this.y,this.r/2,this.r/2);
    }
    this.move = function(){
        this.y-=4;

    }
}