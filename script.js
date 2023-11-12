// Data storage - Initialize the array of To Do items
let todoItems = [];
let uniqueCount = [0];

// Function to add a todo to the list
function addToDoItem(taskDescription) {
  if (typeof taskDescription === "string") {
    console.log("Thanks a lot!");
    uniqueCount[0]++;
    let isTaskCompleted = false;
    let taskID = uniqueCount[0];

    // Check if ID already exists, generate a new one if needed
    while (todoItems.some(item => item.id === taskID)) {
      taskID = uniqueCount[0];
    }

    let taskObj = { id: taskID, text: taskDescription, completed: isTaskCompleted };
    todoItems.push(taskObj);
    console.log(todoItems);
  } else {
    console.log("Please input a string, my friend");
  }
}

// Function to remove a todo from the list
function removeToDoItem(taskID) {
  if (Number.isInteger(taskID) && taskID > 0) {
    console.log("Nice choice of ID");
    let remainingTasks = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === taskID) {
        console.log("Successfully removed!");
        removed = true;
      } else {
        remainingTasks.push(todoItems[i]);
      }
    }
    if (!removed) {
      console.log("Sorry, couldn't find the todo with that ID");
    }

    todoItems = remainingTasks;
  } else {
    console.log("Please input a valid ID, my friend");
  }
}

// Function to mark a task as completed
function markToDoItemAsCompleted(taskID) {
  if (Number.isInteger(taskID) && taskID > 0) {
    console.log(todoItems[0].id);

    let found = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === taskID) {
        todoItems[i].completed = true;
        found = true;
        console.log("Successfully marked as completed!");
      }
    }

    if (!found) {
      console.log("Couldn't find a todo with that ID");
    }
  } else {
    console.log("Please use a number, my friend");
  }
}

// Function to delete a task from the array
function deleteToDoItem(taskID) {
  if (Number.isInteger(taskID) && taskID > 0) {
    console.log("Excellent choice of ID");
    let remainingTasks = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === taskID) {
        console.log("Successfully removed!");
        removed = true;
      } else {
        remainingTasks.push(todoItems[i]);
      }
    }

    if (!removed) {
      console.log("Couldn't find a todo with that ID");
    }

    todoItems = remainingTasks;
  } else {
    console.log("Please input a valid ID, my friend");
  }
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  let uncompletedTasks = [];

  for (let i = 0; i < todoItems.length; i++) {
    if (!todoItems[i].completed) {
      uncompletedTasks.push(todoItems[i]);
    }
  }

  todoItems = uncompletedTasks;
}

addToDoItem("Complete coding assignment");
addToDoItem("Schedule project meeting");
removeToDoItem(1);
markToDoItemAsCompleted(2);
deleteToDoItem(3);
clearCompletedTasks();
console.log(todoItems);