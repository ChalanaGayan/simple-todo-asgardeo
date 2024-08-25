import React, { useEffect, useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('User not authenticated');
                return;
            }

            try {
                const response = await fetch('/api/tasks', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Send the token
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setTasks(data);
                } else {
                    setError(data.msg || 'Failed to load tasks');
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setError('An error occurred');
            }
        };

        fetchTasks();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Task List</h2>
            {tasks.length ? (
                tasks.map((task) => <div key={task._id}>{task.title}</div>)
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
};

export default TaskList;
