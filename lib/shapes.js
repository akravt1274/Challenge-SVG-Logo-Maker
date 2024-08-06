class Shapes {
    constructor(text, textColor, shapeColor) {       
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    // render() method that returns a string for the Circle SVG file with the given shape color.
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Triangle extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    // render() method that returns a string for the Triangle SVG file with the given shape color.
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 20 200, 200 0, 200" fill="${this.shapeColor}" />
        <text x="98" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

class Square extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    
    // render() method that returns a string for the Square SVG file with the given shape color.
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="10" y="10" fill="${this.shapeColor}" />
        <text x="110" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    }
}

// Export shapes as an object of classes
const shapes = {Shapes, Circle, Triangle, Square}
module.exports = shapes;