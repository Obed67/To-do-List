import React, { useState } from 'react';

export default function Edit({ task, editTodo }) {
    const [newTask, setNewTask] = useState(task.task);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(newTask, task.id);
            }}
            className="flex items-center justify-between bg-gray-800 rounded-lg p-4 shadow-lg"
        >
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full px-4 py-2 mr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors"
            >
                Enregistrer
            </button>
        </form>
    );
}