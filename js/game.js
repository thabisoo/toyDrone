function Game(x, y, unit){
    this.x = x;
    this.y = y;
    this.faces  = ["NORTH", "EAST", "SOUTH", "WEST"];
    this.unit = unit;

    this.face = "";
    this.userX = 0;
    this.userY = 0;

    this.projectileCoordinates = {}

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

        this.moveNorth(null);
        this.moveEast(null, width);
        this.moveSouth(null, width);
        this.moveWest(null)

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

    this.attack = function(){
        return this.projectileCoordinates;
    }

    this.moveNorth = function(face){
        if(this.face === "NORTH" && this.y > 1) {
            this.y = this.y - this.unit; 
            this.userY = this.userY + 1;

           this.projectileCoordinates = { 
               a: this.y + (this.unit / 2),
               b: this.y + (this.unit / 2), 
               c: this.y + this.unit, 
               d: this.y + (this.unit * 2)
            };
        }
    }

    this.moveEast = function(face, width){
        if(this.face === "EAST" && this.x <= (width - this.unit - 1)){ 
            this.x = this.x + this.unit; 
            this.userX = this.userX - 1;

            this.projectileCoordinates = { 
                a: this.x + (this.unit / 2),
                b: this.x + (this.unit / 2), 
                c: this.x + this.unit, 
                d: this.x + (this.unit * 2)
             };
        }
    }

    this.moveSouth = function(face, width){
        if(this.face === "SOUTH" && this.y <= (width - this.unit - 1)){
            this.y = this.y + this.unit; 
            this.userY = this.userY - 1;

            this.projectileCoordinates = { 
                a: this.y - (this.unit / 2),
                b: this.y - (this.unit / 2), 
                c: this.y - this.unit, 
                d: this.y - (this.unit * 2)
             };
        }
    }

    this.moveWest = function(face){
        if(this.face === "WEST" && this.x > 1){
            this.x = this.x - this.unit; 
            this.userX = this.userX + 1;

            this.projectileCoordinates = { 
                a: 50,
                b: 50, 
                c: 100, 
                d: 200
             };
        }
    }
}







