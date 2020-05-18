'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.answers = {}
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the smashing ${chalk.red('generator-ts-openapi-server')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Package name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'packageDescription',
        message: 'Package description',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.answers = {
        ...this.answers,
        ...props
      };
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationRoot(),
      { globOptions: { dot: true } }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.answers
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    this.log('All done!')
    this.log(`Run 'npm run generate:all' to initiate the scaffolding`)
  }
};
