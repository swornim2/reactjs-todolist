import { useState } from "react"

export default function TodoInput(props) {
    // Destructure the props to get the necessary functions and state values
    const { handleAddTodos, todoValue, setTodoValue } = props;

    return (
        <header>
            {/* Input field to accept the new task */}
            <input 
                value={todoValue}  // Bind the input field's value to the todoValue state
                onChange={(e) => {
                    setTodoValue(e.target.value);  // Update the todoValue state when the input value changes
                }} 
                placeholder="Please enter your task"  // Placeholder text for the input
            />
            
            {/* Button to add a new todo */}
            <button 
                onClick={() => {
                    handleAddTodos(todoValue);  // Call the handleAddTodos function to add the current todoValue
                    setTodoValue('');  // Clear the input field after adding the todo
                }}
            >
                Add
            </button>
        </header>
    );
}
