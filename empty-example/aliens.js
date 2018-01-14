function Alien(x,y,r){

    this.x      = x;
    this.y      = y;   
    this.r      = r;
    this.show   = function(){

        fill(100,0,255);
        noStroke();
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }
    this.move = function(dir){
        this.x += dir;
    }    
}