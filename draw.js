const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
var originalWidth = 1676
var originalHeight = 918
var scaleX = 0;
var scaleY = 0;

export class draw {
    
    Game(player, block, menu, s, hs) {


        //clear screen
        this.resizeCanvasForWindowSize()
        this.bg()

        if (menu) {
          this.DrawStroked("Yet Another Flappy Game", 250, 200)
          this.DrawStroked("Press W To Start", 260, 350)
          this.DrawStroked(s, 270, 500)
          this.DrawStroked(hs, 770, 500)
        } else {
            this.Circ(player.r, "#afbfaf", player.x, player.y, true)


            this.Rect(block[0].x,block[0].y ,block[0].width , block[0].height)
            this.Rect(block[1].x,block[1].y ,block[1].width , block[1].height)
            this.Rect(block[2].x,block[2].y ,block[2].width , block[2].height)
            this.Rect(block[3].x,block[3].y ,block[3].width , block[3].height)
            this.Rect(block[4].x,block[4].y ,block[4].width , block[4].height)
            this.DrawStroked(s, 50, 100)
        }
    }

    bg() {

        ctx.beginPath();
        ctx.rect(0, 20, 1676, 878);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.rect(20, 0, 1636, 918);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
        this.Circ(20, "black", 20, 20, "no")
        this.Circ(20, "black", 1656, 20, "no")
        this.Circ(20, "black", 20, 898, "no")
        this.Circ(20, "black", 1656, 898, "no")
  
  
        ctx.beginPath();
        ctx.rect(20, 20, 1636, 878);
        ctx.fillStyle = "#90b0c0";
        ctx.fill();
        ctx.closePath();


        this.Rect(1438,459,10, 5000)
        this.Rect(1138,459,10, 5000)
        this.Rect(838,459,10, 5000)
        this.Rect(538,459,10, 5000)
        this.Rect(238,459,10, 5000)
    }

    Rect(x = 0,y = 0,width = 0,height = 0,color = "#000"){
        ctx.beginPath();
        ctx.rect(x - (width/2), y-(height/2), width, height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    Circ(radius, color, x, y, shadow) {
        let inline = radius - 5

        //outline

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        //shadow

        if (shadow === true){
            ctx.beginPath();
            ctx.arc(x - 5, y + 5, radius, 0, Math.PI * 2, false);
            ctx.fillStyle = "rgba(0, 0, 0, .1)";
            ctx.fill();
            ctx.closePath();
        }

        //main color

        ctx.beginPath();
        ctx.arc(x, y, inline, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

    }

    DrawStroked(text, x, y) {
        ctx.font = '80px Sans-serif';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 8;
        ctx.lineJoin="miter";
        ctx.miterLimit=2;
        ctx.strokeText(text, x, y);
        ctx.fillStyle = 'white';
        ctx.fillText(text, x, y);
    }

    resizeCanvasForWindowSize() {

        var currentWidth = canvas.width;
        var currentHeight = canvas.height;
  
        // Get the current window dimensions
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
    
        // Calculate the desired width and height based on the window's dimensions
        
        var desiredWidth = windowWidth;
        var aspectRatio = originalWidth / originalHeight;
        var desiredHeight = desiredWidth / aspectRatio;
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        scaleX = (desiredWidth / originalWidth);
        scaleY = (desiredHeight / originalHeight);
        ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
  
         currentWidth = canvas.width;
         currentHeight = canvas.height;
  
        if (currentHeight >= windowHeight) {
           desiredHeight = windowHeight;
           aspectRatio = originalWidth / originalHeight;
           desiredWidth = desiredHeight * aspectRatio;
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          scaleX = (desiredWidth / originalWidth);
          scaleY = (desiredHeight / originalHeight);
          ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
        }
    }
}