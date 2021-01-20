const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Engineer = require('./lib/Engineer');
const { generateKeyPair } = require('crypto');
// const generateHTML = require("./utils/generateHTML");

var managerQuestions = [
    {
    type: 'input',
    message: 'What is your name?',
    name: 'name' 
},
{
    type: 'input',
    message: 'What is your id?',
    name: 'Id'
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email'
},
{
    type: 'input',
    message: 'What is your number',
    name: 'number'
}
]

var engineerQuestions = [
    {
    type: 'input',
    message: 'What is your engineer name?',
    name: 'name'
    },
    {
        type: 'input',
        message: 'What is your engineer id?',
        name: 'Id'
    },
    {
        type: 'input',
        message: 'What is your enginner email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your engineer github?',
        name: 'github'
    },

]

var internQuestions = [
    {
        type: 'input',
    message: 'What is your intern name?',
    name: 'name'
    },

    {
        type: 'input',
    message: 'What is your intern id?',
    name: 'id'
    },
    {
        type: 'input',
    message: 'What is your intern email?',
    name: 'email'
    },
    {
        type: 'input',
    message: 'What is the school you attend?',
    name: 'school'
    }
]

var managerTeam = []

function init(){
inquirer.prompt(managerQuestions)
    .then(answers => {
        console.log('answers', answers);
      //  writeToFile('index.html',answers)
      let manager = new Manager(answers.name, answers.Id, answers.email, answers.number)
   managerTeam.push(manager)
   addTeam()
    })
}

function addTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            choices: ['Engineer','Intern', 'cancel']

        }
    ]).then(choices => {
        console.log(choices)
        if(choices.employee==='Engineer'){
            createEngineer()
        }else if(choices.employee==='Intern'){
            createIntern()
        }else{
            buildTeam()
        }

      })   
     
    }

function buildTeam() {

    console.log('=========managerTeam=============')

    // for(let i = 0; i<managerTeam.length;i++){
    //     console.log(managerTeam[i])
    //     generateMarkDown(managerTeam[i])
    // }


    fs.writeFileSync('index.html', generateMarkDown(managerTeam), "utf-8");


}
function generateMarkDown(employee){
   return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <body>
        <header>
            <div class="container align-center py-3">
                <h1 class="page-title-light bg-danger py-2 px-3 text-center">My Team</h1>
            </div>
        </header>
        <main class="container">
           ${generateManagerTeam(employee) }

        </main>
    </body>
    </html>`


}
function generateManagerTeam (employee) {
    const html = [];
    
    html.push(employee 
        .filter(em => em.getRole() === "manager")
        .map(manager => generateManager(manager))
        )

    html.push(employee
        .filter(em => em.getRole()=== "Engineer")
        .map(engineer => generateEngineer(engineer)))

        html.push(employee
            .filter(em => em.getRole()=== "Intern")
            .map(intern => generateIntern(intern)))

        return html.join("")
    
}
function generateManager(manager) {
    return ` <div class="col-4 p-0">
    <div class="card mx-auto mb-2" style="max-width: 250px">
    <h5 class="card-header bg-primary text-light">${manager.getName()}</br><i class="fas fa-mug-hot"></i>>Manager</h5>
<ul class="list-group">
    <li class="list-group-item" style="font-size: 15px;">ID: ${manager.getId()}</li>
    <li class="list-group-item" style="font-size: 15px;">Email Adress: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    
    
    <li class="list-group-item" style="font-size: 15px">Office Number:${manager.getOfficeNumber()}
</ul>
</div>
</div>`
}

function generateEngineer(engineer) {
    return ` <div class="col-4 p-0">
    <div class="card mx-auto mb-2" style="max-width: 250px">
    <h5 class="card-header bg-primary text-light">${engineer.getName()}</i>>Engineer</h5>
<ul class="list-group">
    <li class="list-group-item" style="font-size: 15px;">ID: ${engineer.getId()}</li>
    <li class="list-group-item" style="font-size: 15px;">Email Adress: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item" style="font-size: 15px">GitHub info:${engineer.getGit()}
</ul>
</div>
</div>`
}
function generateIntern(intern) {
    return ` <div class="col-4 p-0">
    <div class="card mx-auto mb-2" style="max-width: 250px">
    <h5 class="card-header bg-primary text-light">${intern.getName()}</i>>Intern</h5>
<ul class="list-group">
    <li class="list-group-item" style="font-size: 15px;">ID: ${intern.getId()}</li>
    <li class="list-group-item" style="font-size: 15px;">Email Adress: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item" style="font-size: 15px">attends school:${intern.getSchool()}
</ul>
</div>
</div>`
}

init()
function createEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        console.log('answers', answers);
      //  writeToFile('index.html',answers)
      let engineer = new Engineer(answers.name, answers.Id, answers.email, answers.github)
   managerTeam.push(engineer)
   addTeam()
   console.log('engineer',managerTeam)
})
}

function createIntern(){
    inquirer.prompt(internQuestions)
    .then(answers => {
        console.log('answers', answers);
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        managerTeam.push(intern)
        addTeam()
        console.log('intern',managerTeam)
    })
}
