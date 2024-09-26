import React from 'react';

export default function TodoCards(props) {
    // Destructure the necessary props passed to the component
    const { handleDeleteTodo, handleEditTodo, index } = props;

    return (
        <li className='todoItem'>
            {/* Display the children (which will be the todo text wrapped in a <p> tag) */}
            {props.children}

            {/* Action buttons for editing and deleting the todo */}
            <div className='actionContainer'>
                {/* Button to edit the todo */}
                <button className="icon-button" onClick={() => { handleEditTodo(index); }}>
                    <i className="fa-solid fa-pen-to-square"></i>  {/* Edit icon */}
                </button>

                {/* Button to delete the todo */}
                <button onClick={() => { handleDeleteTodo(index); }}>
                    <i className='fa-regular fa-trash-can'></i>  {/* Trash icon */}
                </button>
            </div>
        </li>
    );
}
