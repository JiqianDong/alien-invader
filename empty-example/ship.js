function Ship(){
    this.h = 60;
    this.x = 1/2*width;
    this.y = height-1/2*this.h;

    this.w = 20;
    this.show = function(){
        rectMode(CENTER);
        fill(255);
        noStroke();
        rect(this.x,this.y,this.w,this.h);
    }
    this.move = function(shipSpeed,shipDir){

        if (shipDir === Direct.up ){ship.y-=shipSpeed;}
        else if (shipDir === Direct.down ){ship.y+=shipSpeed;}
        else if (shipDir === Direct.left ){ship.x-=shipSpeed;}
        else if (shipDir === Direct.right ){ship.x+=shipSpeed;}
    }
}