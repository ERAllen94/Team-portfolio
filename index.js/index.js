const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Engineer = require('./lib/Engineer');
const generateHTML = require("./utils/generateHTML");

const questions = [
{
type: 'input',
name: 'Occupation',
message: 'What is your name?',
message:  'What is your occupation',
message: 'What is your id?',
message: 'What is your email?',
message: 'What is your office number?',
},
{
type: 'input',
name: 'Occupation',
message: 'What is your name?',
message:  'What is your occupation',
message: 'What is your id?',
message: 'What is your email?',
message: 'What is your office number?',
},
{
type: 'input',
name: 'Occupation',
message: 'What is your name?',
message:  'What is your occupation',
message: 'What is your id?',
message: 'What is your email?',
message: 'What is your office number?',
},
{
type: 'input',
name: 'Occupation',
message: 'What is your name?',
message:  'What is your occupation',
message: 'What is your id?',
message: 'What is your email?',
message: 'What is your office number?',
},
{
type: 'input',
name: 'Occupation',
message: 'What is your name?',
message:  'What is your occupation',
message: 'What is your id?',
message: 'What is your email?',
message: 'What is your office number?',
}
]

function init(){
    inquirer.prompt(questions)
    .then(answers => {
        console.log('answers', answers);
        writeToFile('index.html',answers)
    })
}

init()