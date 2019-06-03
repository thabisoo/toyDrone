function Game(x, y, unit){
    this.x = x;
    this.y = y;
    this.faces  = ["NORTH", "EAST", "SOUTH", "WEST"];
    this.unit = unit;

    this.face = "";
    this.userX = 0;
    this.userY = 0;

    this.place = function(_x, _y, face){
        
        this.face = face;
        this.userX = _x;
        this.userY = _y;

        let xPlacement = (this.userX + 1) * unit;
        let yPlacement = (this.userY + 1) * unit;

        return {
            x: this.x = this.x - xPlacement,
            y: this.y = this.y - yPlacement,
            width: this.unit,
            height: this.unit
        }
    }

    this.getFaces = function(){
        return this.faces;
    }

    this.move = function (width){

        this.moveNorth();
        this.moveEast(width);
        this.moveSouth(width);
        this.moveWest()

        return {
            x: this.x,
            y: this.y,
            width: this.unit,
            height: this.unit
        }
    }

    this.report = function(){
        return this.userX + "," + this.userY + "," + this.face;
    }

    this.right = function(){
        var index = this.faces.indexOf(this.face);

        if(index === this.faces.length - 1)
            this.face = this.faces[0];
        else
            this.face = this.faces[index + 1];
    }

    this.left = function(){
        let index = this.faces.indexOf(this.face);

        if(index === 0)
            this.face = this.faces[this.faces.length - 1];
        else
            this.face = this.faces[index - 1];
    }

    this.moveNorth = function(){
        if(this.face === "NORTH" && this.y > 1) {
            this.y = this.y - this.unit; 
            this.userY = this.userY + 1;
        }
    }

    this.moveEast = function(width){
        if(this.face === "EAST" && this.x <= (width - this.unit - 1)){ 
            this.x = this.x + this.unit; 
            this.userX = this.userX - 1;
        }
    }

    this.moveSouth = function(width){
        if(this.face === "SOUTH" && this.y <= (width - this.unit - 1)){
            this.y = this.y + this.unit; 
            this.userY = this.userY - 1;
        }
    }

    this.moveWest = function(){
        if(this.face === "WEST" && this.x > 1){
            this.x = this.x - this.unit; 
            this.userX = this.userX + 1;
        }
    }
}







