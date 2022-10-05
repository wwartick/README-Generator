// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser =()=>{
    return inquirer.prompt([
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
            message: 'What would you like to show the user?(Required)',
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
            },
           }
    ])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
