import React from 'react';
import axios from 'axios';

function Task({ task, fetchTasks }) {
    const deleteTask = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/tasks/${task.id}/`);
            fetchTasks();
        } catch (error) {
            console.error('There was an error deleting the task!', error);
        }
    };

    return (
        <li>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
}

export default Task;
