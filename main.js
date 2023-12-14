const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
import { Player } from "./player.js"
import { draw as Draw } from "./draw.js"
import { Block } from "./block.js"

export class main {

player = new Player()
draw = new Draw()
block = new Array()
menu = true
Score = 0
highScore = 0

async score(){
    while(true){
        await this.sleep(1000)
        if (!this.menu){
            this.Score++
        }
    }
}

async start(){
this.player.Input()
this.Input()
this.blockInit()
this.score()

while(true){

    this.draw.Game(this.player, this.block, this.menu, this.Score, this.highScore)
    if (!this.menu){

    this.player.update()
    this.BlockUpdate()
    this.MiscChecks()
    }

    await this.sleep(1000/60)
}
}



async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}

blockInit() {
    this.block[0] = new Block()
    this.block[1] = new Block()
    this.block[2] = new Block()
}

BlockUpdate() {
    this.block[0].update()
    this.block[1].update()
    this.block[2].update()
}

MiscChecks(){
    if (this.player.y > 1000) {this.Die()}

    for(let i = 0; i <= 2; i++) {

        console.log(this.player.x, ">=", this.block[i].x - this.block[i].width/2)
        console.log(this.player.x, "<=", this.block[i].x + this.block[i].width/2 )
        console.log(this.player.y, ">=", this.block[i].y - this.block[i].height/2 )
        console.log(this.player.y, "<=", this.block[i].y + this.block[i].height/2 )
        if(
            (   this.player.x + this.player.r >= this.block[i].x - this.block[i].width/2&&
                this.player.x + this.player.r <= this.block[i].x + this.block[i].width/2 &&
                this.player.y >= this.block[i].y - this.block[i].height/2&&
                this.player.y <= this.block[i].y + this.block[i].height/2)||
            (   this.player.x - this.player.r >= this.block[i].x - this.block[i].width/2&&
                this.player.x - this.player.r <= this.block[i].x + this.block[i].width/2 &&
                this.player.y >= this.block[i].y - this.block[i].height/2&&
                this.player.y <= this.block[i].y + this.block[i].height/2) ||
            (   this.player.x >= this.block[i].x - this.block[i].width/2&&
                this.player.x <= this.block[i].x + this.block[i].width/2 &&
                this.player.y + this.player.r >= this.block[i].y - this.block[i].height/2&&
                this.player.y + this.player.r <= this.block[i].y + this.block[i].height/2) ||
            (   this.player.x >= this.block[i].x - this.block[i].width/2&&
                this.player.x <= this.block[i].x + this.block[i].width/2 &&
                this.player.y - this.player.r >= this.block[i].y - this.block[i].height/2&&
                this.player.y - this.player.r <= this.block[i].y + this.block[i].height/2)

        ){this.Die()}
    }

}

Input() {
    document.addEventListener('keydown', (event) => {
        var code = event.code;
        if(this.menu == true && code == "KeyW") {
            this.menu = false

            this.Score = 0

        }
    }, false)
}

Die(){
    this.menu = true
    this.player.velX = 0
    this.player.velY = 0
    this.player.row = 3
    this.player.x = 838
    this.player.y = 700
    if (this.Score > this.highScore){
        this.highScore = this.Score
    }
    this.blockInit()
}

}
var game = new main()
game.start()