// TASK MANAGER (Full Version)

// Template Literal allows to create separate lines
const menu = `TASK MANAGER

What would you like to do:
"NEW" - Add A New Task
"TASKS" - Display All Tasks
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [`Charge MacBook`, `Master JavaScript`];

// For displaying tasks to user
let showTasks = "";

// For storing the value of a new task
let newTask;

// For storing the number/index of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option
let userInput = prompt(menu);

// Loops the display menu until the user ends the program (AKA until the user enters "CLOSE" or "close")
while (userInput.toUpperCase() !== "CLOSE") {
  // Checks if the user entered "TASKS" or "tasks"
  if (userInput.toUpperCase() === "TASKS") {
    // Concatenates each task (or item) in the task array to the showTasks string variable
    for (task of tasks) {
      // Using \n to create a new line (AKA Line break)
      showTasks = showTasks + `${task}\n`
    }
    // Displays the current tasks to the user
    alert(showTasks);
    // Sets the value of the showsTasks string variable back to an empty string
    showTasks = "";
    // Checks if the user entered "NEW" or "new"
  } else if (userInput.toUpperCase() === "NEW") {
    // Prompts the user to enter a new task and stores their response
    newTask = prompt(`Please enter the new task:`);
    // Loop that loops until the user enters something
    while (true) {
      // Checks if the user did not enter anything
      if (newTask === "") {
        // Prompts the user again to enter a new task
        newTask = prompt(`Please enter the new task:`);
      } else {
        // Breaks out of the loop since the user entered something
        break;
      }
    }
    // Alerts the user their new task has been added
    alert(`${newTask} has been added!`);
    // Adds the user's entry as a new item at the end of the tasks array
    tasks.push(newTask);
    // Checks if the user entered "REMOVE" or "remove"
  } else if (userInput.toUpperCase() === "REMOVE") {
    // Loop that loops until user enters a valid number
    while (true) {
      // Concatenates each task (or item) in the task array to the showTasks string variable. Also, set a number/index for each task
      for (i = 0; i < tasks.length; i++) {
        // Using \n to create a new line (AKA Line break). Also, adding 1 to i (AKA the index) to the numbers will start displaying at 1
        showTasks = showTasks + `${i + 1}: ${tasks[i]}\n`;
      }
      // Prompts the user to enter a number and stores their response. Also, using \n to create a new line (AKA Line break). Also, subtracting 1 from entry so it matches the index in the tasks array. (NOTE: JavaScript will attempt to convert a string into a number when you try to subtract from it. Just like parseInt does.)
      num = prompt(`Please enter a number to remove:\n${showTasks}`) - 1;
      // Verifies the user entered a number with the index/number range
      if (num >= 0 && num < tasks.length) {
        // Removes the selected task/item and stores the value
        removed = tasks.splice(num, 1);
        // Alerts user of the task/item that has been removed (NOTE: Will still work with the zero index: [0])
        alert(`${removed[0]} has been removed`);
        // Sets the value of the showsTasks string variable back to an empty string
        showTasks = "";
        // Breaks out of the loop since the user entered a valid number/index
        break;
      } else {
        // Alerts the user that they have not entered a valid number
        alert(`Not a valid entry`);
        // Sets the value of the showsTasks string variable back to an empty string
        showTasks = "";
      }
    }
  }
  // Displays the menu again
  userInput = prompt(menu);
}
// Alerts the user they have closed the program
alert(`Thank you for using Task Manager!`);