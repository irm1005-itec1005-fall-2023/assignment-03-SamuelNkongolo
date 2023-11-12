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

// Initialise an empty array with the variable name todoItems

let todoItems = [];
let unique = 0;

// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// the function does not need to return anything
function addToDoItem(text) {
  if (typeof text !== "string") {
    console.log("Wrong input, please enter a string");
    return false;
  }

  // Increment unique before assigning it to the todo ID
  unique++;

  let ID = unique;

  // Check if ID already exists, generate a new one if needed
  while (todoItems.some(item => item.id === ID)) {
    ID = Math.floor(Math.random() * 9999);
  }

  // Implement the logic to add a task here
  let todo = {
    id: ID,
    text: text,
    completed: false,
  };
  todoItems.push(todo);
  console.log("Todo item added");

  if (typeof text === "string") {
    console.log("Thank you");
  }
}

// Example usage:
addToDoItem("Order pizza");
addToDoItem("Read a book");

console.log(todoItems);

// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoId) {
  // Implement the logic to add a task here
  for (let i = 0; 1 < todoItems.length; i++){

    if(todoItems[i].id === todoId){
  
    todoItems.splice(i,1);
     break;
    }
    }
  }
  


// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here
  const IndexMark = todoItems.findIndex((todo) => todo.id === todoId);

  if (IndexMark !== -1) {
    todoItems[IndexMark].completed = true;
    console.log(`Todo item with id ${todoId} marked as completed.`);
  } else {
    console.log(`Todo item with id ${todoId} not found.`);
  }
}


// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
  // Find the index of the todo item with the given todoId
  const indexToDelete = todoItems.findIndex(todo => todo.id === todoId);

  if (indexToDelete !== -1) {
    
    todoItems.splice(indexToDelete, 1);
    console.log(`Todo item with id ${todoId} deleted successfully.`);
  } else {
    console.log(`Todo item with id ${todoId} not found.`);
  }
}


// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here
      todoItems = todoItems.filter(todo => !todo.completed);
}

// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed

addToDoItem("eat pizza"); 
removeToDoItem(0); 
console.log(todoItems); 
markToDoItemAsCompleted(0);