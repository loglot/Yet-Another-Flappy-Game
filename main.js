const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");
import { Player } from "./player.js"
import { draw as Draw } from "./draw.js"

export class main {

player = new Player()
draw = new Draw()

async start(){
this.player.Input()

while(true){

    this.draw.Game(this.player)
    this.player.update()
    await this.sleep(1000/60)
}
}



async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}




}
var game = new main()
game.start()