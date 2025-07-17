// importing readline module
import readline from "readline";
// creating readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2 : View Tasks");
  console.log("3:Exit");
  rl.question("choose an option :", handleUserInput);
};

const handleUserInput = (option) => {
  if (option === "1") {
    rl.question("Enter a task: ", (task) => {
      todos.push(task);
      console.log(`Task added: ${task}`);
      showMenu();
    });
  } else if (option === "2") {
    if (todos.length === 0) console.log("not any task available!");
    else {
      console.log("All task :\n");
      todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
    showMenu();
  } else if (option === "3") {
    console.log("bye ! bye!");
    rl.close();
  } else {
    console.log("Invalid input! , try again!");
    showMenu();
  }
};

showMenu();
