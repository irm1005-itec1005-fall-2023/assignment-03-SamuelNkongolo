// Data storage - Initialize the array of To Do items
let todoItems = [];
let unique = [0];

// Function to add a todo to the list
function addToDoItem(text) {
  if (typeof text === "string") {
    console.log("Thanks a lot!");
    unique[0]++;
    let isCompleted = false;
    let ID = unique[0];

    // Check if ID already exists, generate a new one if needed
    while (todoItems.some(item => item.id === ID)) {
      ID = unique[0];
    }

    let Obj = { id: ID, text: text, completed: isCompleted };
    todoItems.push(Obj);
    console.log(todoItems);
  } else {
    console.log("Please input a string, my friend");
  }
}

// Function to remove a todo from the list
function removeToDoItem(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    console.log("Nice choice of ID");
    let diffArray = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        console.log("Successfully removed!");
        removed = true;
      } else {
        diffArray.push(todoItems[i]);
      }
    }
    if (!removed) {
      console.log("Sorry, couldn't find the todo with that ID");
    }

    todoItems = diffArray;
  } else {
    console.log("Please input a valid ID, my friend");
  }
}

// Function to mark a task as completed
function markToDoItemAsCompleted(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    console.log(todoItems[0].id);

    let found = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
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
function deleteToDoItem(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    console.log("Excellent choice of ID");
    let goneArray = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        console.log("Successfully removed!");
        removed = true;
      } else {
        goneArray.push(todoItems[i]);
      }
    }

    if (!removed) {
      console.log("Couldn't find a todo with that ID");
    }

    todoItems = goneArray;
  } else {
    console.log("Please input a valid ID, my friend");
  }
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  let completedTasks = [];

  for (let i = 0; i < todoItems.length; i++) {
    if (!todoItems[i].completed) {
      completedTasks.push(todoItems[i]);
    }
  }

  todoItems = completedTasks;
}

addToDoItem("Third task");
addToDoItem("Fourth task");
removeToDoItem(1);
markToDoItemAsCompleted(2);
deleteToDoItem(4);
clearCompletedTasks();
console.log(todoItems);