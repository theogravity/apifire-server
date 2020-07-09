"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.answers = {};
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the smashing ${chalk.red(
          "generator-ts-openapi-server"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Package name",
        default: this.appname,
      },
      {
        type: "input",
        name: "packageDescription",
        message: "Package description",
        default: "",
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.answers = {
        ...this.answers,
        ...props,
      };
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationRoot(),
      this.answers,
      {
        globOptions: { dot: true },
      }
    );

    this.fs.copy(
      this.templatePath("docker/dev/.bash_profile"),
      this.destinationPath("docker/dev/.bash_profile")
    );

    this.fs.copy(this.templatePath(".*"), this.destinationRoot());
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false,
    });
  }

  end() {
    this.log("All done!");
    this.log(`Run 'npm run generate:all' to initiate the scaffolding`);
  }
};
