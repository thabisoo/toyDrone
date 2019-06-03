function GameSetup(){
    this.stage = document.getElementById('myCanvas'); 
    this.ctx = this.stage.getContext('2d');
    this.stageWidth = 550;
    this.singleUnit = 50; 
    
    this.toyDrone;
    
    this.placeDrone = function(){

        let x = parseInt(document.getElementById("x").value);
        let y = parseInt(document.getElementById("y").value);
        let face = String(document.getElementById("face").value).toUpperCase();
        
        if((x > 10 || x < 0) || isNaN(x)){
            alert("Please make sure X is between 0 and 10");
            return;
        }

        if((y > 10 || y < 0) || isNaN(y)){
            alert("Please make sure Y is between 0 and 10");
            return;
        }

        this.toyDrone = new Game(this.stageWidth,this.stageWidth,this.singleUnit);

        if(!this.toyDrone.getFaces().includes(face)){
            alert("Invalid Face");
            document.getElementById("faces").innerHTML = this.a();
            return;
        }
           
        var coordinates = this.toyDrone.place(x,y,face);

        this.ctx.clearRect(0,0, this.stageWidth, this.stageWidth);
        this.draw(coordinates.x, coordinates.y, coordinates.width, coordinates.height);
    }

    this.moveDrone = function(){
        var coordinates = this.toyDrone.move(this.stageWidth);

        this.ctx.clearRect(0,0, this.stageWidth, this.stageWidth);
        this.draw(coordinates.x, coordinates.y, coordinates.width, coordinates.height);

    }

    this.draw = function(x,y,width,height) {
        this.ctx.fillStyle = "#fff";
        this.ctx.fillRect(x, y, width, height); 
    }

    this.faceLeft = function(){
        this.toyDrone.left();
    }

    this.faceRight = function(){
        this.toyDrone.right();
    }

    this.reportMovement = function(){
        document.getElementById("output").innerHTML = this.toyDrone.report()
    }

    this.droneNotYetPlaced = function(){
        document.getElementById("btnMove").disabled = true;
        document.getElementById("btnReport").disabled = true;
        document.getElementById("btnLeft").disabled = true;
        document.getElementById("btnRight").disabled = true;
        document.getElementById("btnAttack").disabled = true;
    }

    this.dronePlaced = function(){
        document.getElementById("btnMove").disabled = false;
        document.getElementById("btnReport").disabled = false;
        document.getElementById("btnLeft").disabled = false;
        document.getElementById("btnRight").disabled = false;
        document.getElementById("btnAttack").disabled = false;
    }

    this.stringFaces = function(){
        let faces = "";

        this.toyDrone.getFaces().forEach(face => {
            faces = faces + face + ", ";
        });
        return faces;
    }
}

gameSetup = new GameSetup();
gameSetup.droneNotYetPlaced();

function place(){
    gameSetup.placeDrone();
    gameSetup.dronePlaced();
}

function move(){
    gameSetup.moveDrone();
}

function left(){
    gameSetup.faceLeft();
}

function right(){
    gameSetup.faceRight();
}

function report(){
    gameSetup.reportMovement();
}

