import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/tasks/');
            setTasks(response.data);
        } catch (error) {
            console.error('There was an error fetching the tasks!', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/tasks/', { title, description });
            fetchTasks();
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('There was an error creating the task!', error);
        }
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task} fetchTasks={fetchTasks} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
