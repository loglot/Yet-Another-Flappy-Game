export class Player {
    x = 838
    y = 200
    r = 80
    velX = 0
    velY = 0
    row = 3
    update(){
        this.x += this.velX
        this.y += this.velY
        this.velX = this.velX *.95
        this.velY = this.velY *.99
        this.velY += .5
        console.log(this.x)
        if (this.y <= 100 && this.velY <0) {
            this.velY = 0
            this.y = 100
        }
    }

    Input(){
        document.addEventListener('keydown', (event) => {
            var code = event.code;
            //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
            if (code == "ArrowRight") {
                if (this.row < 5) {
                    this.velX += 15
                    this.row++
                }
            }
            if (code == "ArrowLeft") {
                if (this.row > 1) {
                    this.velX -= 15
                    this.row--
                }
            }        
            if (code == "ArrowUp") {
                this.velY -= 20
            }        
            if (code == "ArrowDown") {
                this.velY += 20
            }
          }, false);
    }
}