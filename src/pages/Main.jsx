import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import Header from '../components/Header';

const Main = () => {
    

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Sample Task 1', description: 'This is a sample task description.' },
        { id: 2, title: 'Sample Task 2', description: 'Another task description here.' },
    ]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });
    const [editingTask, setEditingTask] = useState(null);

    const addTask = () => {
        if (newTask.title && newTask.description) {
            setTasks([...tasks, { id: Date.now(), ...newTask }]);
            setNewTask({ title: '', description: '' });
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const startEditing = (task) => {
        setEditingTask(task);
    };

    const saveTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? editingTask : task));
        setEditingTask(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prev => ({ ...prev, [name]: value }));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingTask(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-10">
                <div className="w-full text-center py-16">
                    <img
                        src="/taskmate-high-resolution-logo-transparent.png" // Replace with the path to your logo image
                        alt="TaskMate Logo"
                        width={300}
                        className="mx-auto mb-4"
                    />

                </div>
                <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg p-6">
                    {/* Form to add new task */}
                    <div className="mb-6">
                        <input
                            name="title"
                            value={newTask.title}
                            onChange={handleChange}
                            placeholder="Task Title"
                            className="w-full p-3 mb-2 border border-gray-700 rounded-lg bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            name="description"
                            value={newTask.description}
                            onChange={handleChange}
                            placeholder="Task Description"
                            className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            onClick={addTask}
                            className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Add Task
                        </button>
                    </div>

                    {/* Task List */}
                    <div className="space-y-4">
                        {tasks.map(task => (
                            <div key={task.id} className="relative bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600">
                                {editingTask && editingTask.id === task.id ? (
                                    <div className="space-y-2">
                                        <input
                                            name="title"
                                            value={editingTask.title}
                                            onChange={handleEditChange}
                                            placeholder="Edit Title"
                                            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                        <input
                                            name="description"
                                            value={editingTask.description}
                                            onChange={handleEditChange}
                                            placeholder="Edit Description"
                                            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                        <button
                                            onClick={() => saveTask(task.id)}
                                            className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <h3 className="text-lg font-bold">{task.title}</h3>
                                        <p className="text-gray-300">{task.description}</p>
                                        <button
                                            onClick={() => startEditing(task)}
                                            className="absolute top-2 right-8 p-1 text-yellow-400 hover:text-yellow-500 focus:outline-none"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-600 focus:outline-none"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;