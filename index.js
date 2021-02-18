const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./Lib/Employee.js');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Manager.js');


let people = [];


// for (i=0, i < people.length, i++) {
//     if (people[i].getRole() === "Manager") {
//         create manager card and append
//     } 
//         if (people[i].getRole() === "Intern") {
//             create intern card and append }
// // }


// TODO: Create an array of questions for user input
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the Manager name?',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the Manager employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Manager email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        }
]).then(answers => {
            const manager = new Manager(answers.officeNumber, answers.name, answers.id, answers.email);
            people.push(manager);
            pick();
        }) 

    function pick(){

        inquirer.prompt([{
            type: 'list',
            name: 'typeOfEmployee',
            message: 'Please select a role of an employee to add, or end process.',
            choices: ["Engineer","Intern","End"]
        }]).then(answers => {
            let job = answers.typeOfEmployee;
            switch (job) {
                case "Engineer": 
                engineer();
                    break;
                case "Intern": 
                intern();
                    break;
                case "End": 
                end();
            }
        })
    }
  

    // inquirer.prompt([], function(answers){
    //     answers.whatever
    // })
// Function out other questions and put it in callback function
    // inquirer.prompt([]).then(answers => {
    //     answers.whatever
    // })

    



        function engineer(){inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is the Engineer name?',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is the Engineer employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Engineer email address',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineer GitHub?',
        }]).then(answers => {
            const engineer = new Engineer(answers.github, answers.name, answers.id, answers.email);
            people.push(engineer);
            pick();
        })
    }
        function intern() {inquirer.prompt([
            {
                type: 'input',
                name: 'Name',
                message: 'What is the Intern name?',
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'What is the Intern employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Intern email address',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did the Intern go to?',
            }]).then(answers => {
                const intern = new Intern(answers.school, answers.name, answers.id, answers.email);
                people.push(intern);
                pick();
            })
        };
        
        function end() {
            fs.writeFile('company.html', generateHTML(userInput), (err) => {
                    if (err) {
                        console.log("There was an error, please try again!");
                    } else {
                        console.log('Successfully created Readme!');
                    }
                });
        };

    };

// TODO: Create a function to write HTML
const generateHTML = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="Dist/style.css">
<title>Title</title>
</head>
<body>
    <div>
        
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>
</html>`;

// Function call to initialize app
promptUser();

