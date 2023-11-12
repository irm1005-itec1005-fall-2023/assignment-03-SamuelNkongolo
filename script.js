/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// You must use the following object literal structure when creating new todo items
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Data storage - Initialize the array of To Do items
let todoItems = [];
let unique = [0];

// Function to add a todo to the list
function addToDoItem(text) {
  if (typeof text === "string") {
    console.log("Thank you");
    unique[0]++;
    let isCompleted = false;
    let ID = unique[0];

    // Check if ID already exists, generate a new one if needed
    while (todoItems.some(item => item.id === ID)) {
      ID = Math.floor(Math.random() * 9999);
    }

    let jec = { id: ID, text: text, completed: isCompleted };
    todoItems.push(jec);
    console.log(todoItems);
  } else {
    console.log("Please input a string");
  }
}

// Function to remove a todo from the list
function removeToDoItem(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    console.log("Good ID");
    let diffArray = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        console.log("Removed");
        removed = true;
      } else {
        diffArray.push(todoItems[i]);
      }
    }
    if (!removed) {
      console.log("Todo item with the provided ID not found");
    }

    todoItems = diffArray;
  } else {
    console.log("Please input a valid ID");
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
        console.log("Marked as completed");
      }
    }

    if (!found) {
      console.log("Todo item with the provided ID not found");
    }
  } else {
    console.log("Please use a number");
  }
}

// Function to delete a task from the array
function deleteToDoItem(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    console.log("Good ID");
    let goneArray = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        console.log("Removed");
        removed = true;
      } else {
        goneArray.push(todoItems[i]);
      }
    }

    if (!removed) {
      console.log("Todo item with the provided ID not found");
    }

    todoItems = goneArray;
  } else {
    console.log("Please input a valid ID");
  }
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  let checkedMarkTasks = [];

  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].completed) {
      console.log("Checked task removed");
    } else {
      checkedMarkTasksTasks.push(todoItems[i]);
    }
  }

  todoItems = completedTasks;
}
addToDoItem("Task one");
addToDoItem(123);
removeToDoItem(2);
markToDoItemAsCompleted(1);
deleteToDoItem(3); 
clearCompletedTasks();