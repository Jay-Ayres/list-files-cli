const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("list-files-pkg");

const inquirer = require("./lib/inquirer");

clear();

console.log(
  chalk.blue(figlet.textSync("ListFiles-CLI", { horizontalLayout: "full" }))
);

const run = async () => {
  try {
    const desiredPath = await inquirer.askPath();
    // Retrieve files
    const myFiles = files.getOrderedlist(desiredPath.path);
    console.log(myFiles);

    console.log(chalk.green("All done!"));
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(chalk.yellow("Invalid path!"));
    } else {
      console.log(chalk.red(err));
    }
  }
};

run();
