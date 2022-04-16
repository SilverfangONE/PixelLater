class Color{
    constructor(red =  Math.random() * 255, green = Math.random() * 255, blue =  Math.random() * 255) {
        this.red = red
        this.green = green
        this.blue = blue
    }

    toString() {
        return `rgb(${color.red}, ${color.green}, ${color.blue})`
    }
}

module.exports = Color 