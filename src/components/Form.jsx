import React from 'react';

export default function Form({ createTodo, newTask, setNewTask, inputRef }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                createTodo(newTask);
            }}
            className="flex items-center justify-between bg-gray-800 rounded-lg p-4 shadow-lg"
        >
            <input
                type="text"
                placeholder="Ajouter une nouvelle tâche"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                ref={inputRef}
                className="w-full px-4 py-2 mr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
                Ajouter
            </button>
        </form>
    );
}