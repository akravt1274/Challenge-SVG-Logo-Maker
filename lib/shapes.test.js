const shapes = require('./shapes.js');

describe('Validate render() method for Circle class', () => {
    it('should return a string for the corresponding SVG file with the "blue" shape color', () => {
        const circle = new shapes.Circle("SVG","white","blue");
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);
    })
})

describe('Validate render() method for Triangle class', () => {
    it('should return a string for the corresponding SVG file with the "red" shape color', () => {
        const triangle = new shapes.Triangle("SVG","white","red");
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 20 200, 200 0, 200" fill="red" />
        <text x="98" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);
    })
})

describe('Validate render() method for Square class', () => {
    it('should return a string for the corresponding SVG file with the "green" shape color', () => {
        const square = new shapes.Square("SVG","white","green");
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="10" y="10" fill="green" />
        <text x="110" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`);
    })
})
