'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    //this.log('Initializing...');
  }

  prompting() { 
	this.log(yosay('Welcome to the Frontend start projects generator!'));

    // this.log(chalk.green(
    //   'Welcome to the Frontend start projects generator!\n'
    // ));

    const questions = [
    {
      type    : 'input',
      name    : 'name',
      message : 'Enter your project name: ',
      //default : this.appname // Default to current folder name
    },
    {
      type: 'list',
      name: 'type',
      message: 'What kind of project do you want to create? ',
      choices: ['simple web', 'react', 'react + redux'],
      default: 'simple web'
    },
    // {
    //   type    : 'confirm',
    //   name    : 'cool',
    //   message : 'Would you like to enable the Cool feature?'
    // }
    ];

    return this.prompt(questions).then((answers) => {
    	this.props = answers;
    });
  }

  install() {
  	// this.log('app name: ', this.props.name);
    //  this.log('project type: ', this.props.type);

    switch(this.props.type) {
    	case 'simple web':
			this.log(chalk.red('\n! Now I will install simple web app...'));
    		//this.spawnCommand('create-react-app', [this.props.name]);
    		break;
    	case 'react':
			this.log(chalk.red('\n! Now I will install react app...'));
    		this.spawnCommand('create-react-app', [this.props.name]);
    		break;
		case 'react + redux':
			this.log(chalk.red('\n! Now I will install react app with redux...'));
			/*
			 * There are 2 possibla templates:
			 * https://github.com/notrab/create-react-app-redux
			 * https://github.com/yingray/create-react-redux-app
			*/
    		//this.spawnCommand('create-react-app', [this.props.name]);
    		break;
    	default:
    		console.log('Nothing happen');
    }
  }

};