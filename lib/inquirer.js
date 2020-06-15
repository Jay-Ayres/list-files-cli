const inquirer = require('inquirer');

module.exports = {
  askPath: () => {
    const questions = [
      {
        name: 'path',
        type: 'input',
        message: 'Enter the desired path:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a valid path.';
          }
        }
      },
    ];
    return inquirer.prompt(questions);
  },
};