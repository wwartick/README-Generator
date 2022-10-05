//  Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//  Create an array of questions for user input
const questions= [
        {
         type: 'input',
         name: 'project',
         message: 'What is the name of your project?(Required)',
         validate: input=>{
            if (input) {
                return true;
            } else {
                console.log('Please enter your project name!')
                return false;
            }
         }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project(Required)',
            validate: input=>{
               if (input) {
                   return true;
               } else {
                   console.log('Please enter your project name!')
                   return false;
               }
            },
           },
           {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Does your project have a license?',
            default: true
             },
           {
            type: 'list',
            name: 'license',
            message: 'Please choose your project license:',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
           {
            type: 'input',
            name: 'install',
            message: 'What instructions are needed for installation?(Required)',
            validate: input=>{
               if (input) {
                   return true;
               } else {
                   console.log('Please enter installation instructions!')
                   return false;
               }
            }
            },   
           {
            type: 'input',
            name: 'usage',
            message: 'What usage instructions/examples do you have for the user?(Required)',
            validate: input=>{
               if (input) {
                   return true;
               } else {
                   console.log('Please enter usage information!')
                   return false;
               }
            }
           },
           {
            type: 'input',
            name: 'contribute',
            message: 'What can users do to contribute?(Required)',
            validate: input=>{
               if (input) {
                   return true;
               } else {
                   console.log('Please enter contribution instructions!')
                   return false;
               }
            }
           },
           {
            type: 'input',
            name: 'test',
            message: 'How would a user run a test?(Required)',
            validate: input=>{
               if (input) {
                   return true;
               } else {
                   console.log('Please enter test instructions!')
                   return false;
               }
            }
           },
           {
            type: 'input',
            name: 'github',
            message: 'What is your github?(Required)',
            validate: input=>{
               if (input) {
                   return true;
               } else {
                   console.log('Please enter your github name!')
                   return false;
               }
            }
           },
           {
            type: 'input',
            name: 'email',
            message: 'What is your email?(Required)',
            validate: input=>{
               if (input) {
                   return true;
               } else {
                   console.log('Please enter your email!')
                   return false;
               }
            }
           }
    ];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err =>{
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok:true, 
                message: 'File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(answers=>{
        console.log('Creating your README.md...');

        writeToFile('./dist/README.md', generateMarkdown(answers));
    });
};

// Function call to initialize app
init();
