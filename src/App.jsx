import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInputs.jsx"
import TodoList from "./components/TodoList.jsx"

function App() {
  // Initialize the 'todos' state with data from localStorage, or set to an empty array if no data exists
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos"); // Fetch todos from localStorage
    return savedTodos ? JSON.parse(savedTodos) : [];  // Parse the todos if they exist, otherwise initialize an empty array
  });

  // State to keep track of the current input value for adding a new todo
  const [todoValue, setTodoValue] = useState('');

  // Function to handle adding new todos
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];  // Create a new array with the old todos and the new todo appended
    setTodos(newTodoList);                    // Update the state with the new list of todos
  }

  // Function to handle deleting a todo by its index
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;             // Filter out the todo that matches the index
    });
    setTodos(newTodoList);                    // Update the state with the new list (without the deleted todo)
  }

  // Function to handle editing a todo by its index
  function handleEditTodo(index) {
    console.log('hello');                      // Log message for debugging
    let newTask = todos[index];                // Get the current task at the given index
    newTask = prompt("Enter edited text", todos[index]);  // Prompt the user to enter the new text
    if (newTask !== null && newTask.trim() !== "") {      // Ensure the prompt result is not null or empty
      const previousTodos = [...todos];        // Copy the existing todos into a new array
      previousTodos[index] = newTask;          // Update the specific task at the index with the new task
      console.log(previousTodos);              // Log the updated todos list for debugging
      setTodos(previousTodos);                 // Update the state with the edited todo list
    }
  }

  // useEffect hook to save the todos to localStorage whenever the 'todos' state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));  // Save the todos to localStorage as a JSON string
  }, [todos]);  // The effect runs whenever the 'todos' array changes

  return (
    <>
      <main>
        {/* TodoInput component for adding new todos. Pass the state and function as props */}
        <TodoInput 
          todoValue={todoValue} 
          setTodoValue={setTodoValue} 
          handleAddTodos={handleAddTodos} 
        />
        
        {/* TodoList component for displaying and managing the todo list. Pass relevant props */}
        <TodoList 
          handleDeleteTodo={handleDeleteTodo} 
          handleEditTodo={handleEditTodo} 
          todos={todos} 
        />
      </main>
    </>
  );
}

export default App;
