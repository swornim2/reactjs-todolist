import React from 'react';
import TodoCards from './TodoCards';  // Import the TodoCards component

export default function TodoList(props) {
    // Destructure the todos array from props
    const { todos } = props;

    return (
        <ul>
            {/* Iterate over the todos array and render a TodoCard for each todo */}
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCards 
                        {...props}        // Spread the remaining props (such as handleDeleteTodo, handleEditTodo) to pass them to TodoCards
                        key={todoIndex}    // Set a unique key for each TodoCard based on its index (required for React to identify elements)
                        index={todoIndex}  // Pass the current index to TodoCards (useful for delete/edit actions)
                    >
                        <p>{todo}</p>
                    </TodoCards>
                );
            })}
        </ul>
    );
}
