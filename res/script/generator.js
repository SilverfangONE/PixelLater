/**
 * Color for Pallete
 */
class Color{
    constructor(red =  Math.random() * 255, green = Math.random() * 255, blue =  Math.random() * 255) {
        this.red = red
        this.green = green
        this.blue = blue
    }

    toString() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }
}

const white = new Color(255, 255, 255)

/**
 *  color pallete 
 */
class Pallete{
    constructor(size = 10) {
        this.array = new Array()
        for(let i = 0; i < size; i++) {
            this.array.push(new Color())
        }
    }

    getRandome() {
        return this.array[parseInt(Math.random() * 10, 10)]
    }
}

class Canvas{

    constructor(height = 800, width = 800) {   
        this.can = document.getElementById('canvas')
        this.can.style.height = `${height}px`
        this.can.style.width = `${width}px`
        this.ctx = this.can.getContext("2d")

        this.generate()
    }

    generate() {
       setInterval(() => {     
            // this.ctx.beginPath()
            // this.ctx.clearRect(0, 0, this.width, this.height);
            this.pallete = new Pallete();
            this.draw()
        }, 1);
    }

    draw() {
        console.log("draw")
        var lastColor = null;

        for(let canY = 0; canY < canvas.height; canY++) {
            
            for(let canX = 0; canX < canvas.width; canX++) {
               
                var color = this.pallete.getRandome()
               
                if(color === lastColor || Math.random() > 0.5) {
                    lastColor = color
                } else {
                    color = white
                }

                this.ctx.fillStyle = color.toString()
                this.ctx.fillRect(canX, canY, 1, 1);
            }
        }
    }
}

new Canvas()