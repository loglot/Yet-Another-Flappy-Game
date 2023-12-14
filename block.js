export class Block {
    x = 1000
    y = 1000
    width = 300
    height = 100
    e = true


    async update() {
        if(this.e){
            this.y += 5
            if (this.y > 950) {
                this.y = -50
                this.e = false
                await this.sleep(this.Rand(1500))
                var rand = this.Rand(5)
                this.x = -62 + 300 + (300 * rand)

                this.e = true
            }
            console.log(this.y, this.x)
        }

    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    
    }

    Rand(maxLimit = 1){
        let rand = Math.random() * maxLimit;
        console.log(rand);
      
        rand = Math.floor(rand);
      
        return rand;
      }
}