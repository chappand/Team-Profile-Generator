const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./Lib/Employee.js');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Manager.js');


let people = [];

// const manager = new Manager(answers.officeNumber, answers.name, answers.id, answers.email)

//people.push(manager);

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
            
                default:
                    break;
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
            const engineer = new Engineer(answers.officeNumber, answers.name, answers.id, answers.email);
            people.push(engineer);
            pick();
        })
    }
        break;
        case "Intern": inquirer.prompt([
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
            },
            {
                type: 'list',
                name: 'typeOfEmployee',
                message: 'Please select a role of an employee to add, or end process.',
                choices: ["Engineer","Intern","End"]
            }])
            break;
            case "End": prompts.complete;
            break;
    }
}
// TODO: Create a function to write HTML
// const generateHTML = (userInput) =>
//     `# ${userInput.title}

// ## Description

// ${userInput.description}

// ## Table of Contents

// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributing](#contributing)
// * [Tests](#tests)
// * [Questions](#questions)

// ## Installation

// ${userInput.installation}

// ## Usage

// ${userInput.usage}

// ## License

// ## Contributing

// ${userInput.contributing}

// ## Tests

// ${userInput.tests}

// ## Questions

// Here is the link to my GitHub: [${userInput.githubUN}](${userInput.githubLink})

// If you have any further questions, please reach out to me via email at: ${userInput.email}`;

// Function call to initialize app
promptUser();
    // .then((userInput) => fs.writeFile('README.md', generateReadme(userInput), (err) => {
    //     if (err) {
    //         console.log("There was an error, please try again!");
    //     } else {
    //         console.log('Successfully created Readme!');
    //     }
    // }));
