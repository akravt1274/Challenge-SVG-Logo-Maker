const shapes = require('./lib/shapes.js');

// Create a function to generate SVG file
function generateLogo(answers) {    
    let svg = '';
    switch (answers.shape) {
        case 'circle':
            const circle = new shapes.Circle(answers.text, answers.textColor, answers.shapeColor);
            svg = circle.render();
            break;
        case 'triangle':
            const triangle = new shapes.Triangle(answers.text, answers.textColor, answers.shapeColor);
            svg = triangle.render();
            break;
        case 'square':
            const square = new shapes.Square(answers.text, answers.textColor, answers.shapeColor);
            svg = square.render();
            break;
    }  
    return svg;
}

// Export generateLogo() function
module.exports.generateLogo = generateLogo;