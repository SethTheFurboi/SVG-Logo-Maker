const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createlogo } = require('./logogen');

class Input {

    run() {
        return inquirer
          .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter logo text',
                maxLength: 3
              },
            {
                type: 'input',
                name: 'textcolor',
                message: 'Please enter text color (keyword or hexidecimal)',
              },
            {
                type: 'rawlist',
                name: 'shape',
                message: 'Please choose a shape',
                choices: ['circle', 'triangle', 'square'],
              },
            {
                type: 'input',
                name: 'shapecolor',
                message: 'Please enter shape color (keyword or hexidecimal)',
              },
          ])
          .then(({ text, textcolor, shape, shapecolor }) => {

            return writeFile(
                join(__dirname, '..', 'output', 'logo.svg'),
                createlogo(text, textcolor, shape, shapecolor)
              );

          })
      }

}

module.exports = Input;