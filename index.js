// Load packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('validate-color').default;  // to check if a color is valid
const generateLogo = require('./generateLogo.js');


// Function to validate if a color is a valid hexadecimal color value using regular expression to match valid color formats
function isValidHexColor(hex) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
}

// Function to validate text length
function isValidTextLength(text) {
    return text.split('').length < 4 ? true : false;
}

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Provide logo text:",
        validate(text) {
            if (text.trim() === '') {
                return 'Please provide logo text.';
            } else {
                if (isValidTextLength(text)) {
                    return true;
                }
                return 'Logo text can be up to three characters.'; 
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Provide text color:",
        validate(textColor) {
            // validate if a color is a valid hexadecimal color value using regular expression
            if (isValidHexColor(textColor)) {
                return true;
            } else
                // validate if a color is a valid color keyword value using 'validate-color' npm package
                if (validateColor(textColor)) { 
                return true;
            } else {
                return 'Please provide color keyword OR a hexadecimal number.';
            }        
        },
    },    
    {
        type: 'list',
        name: 'shape',
        message: 'Provide logo shape:',
        choices: ['circle',
            'triangle',
            'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Provide shape color:",
        validate(shapeColor) {
            if (isValidHexColor(shapeColor)) {
                return true;
            } else if (validateColor(shapeColor)) {
                return true;
            } else {
                return 'Please provide color keyword OR a hexadecimal number.';
            }
        },
    },
];

// Create a function to generate SVG file
function writeToFile(fileName, answers) {
    
    const logo = generateLogo.generateLogo(answers);
    fs.writeFile(fileName, logo, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('./examples/logo.svg', answers);
        });
}

// Function call to initialize app
init();