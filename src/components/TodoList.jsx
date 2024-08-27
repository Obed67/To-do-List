import React, { useState, useRef, useEffect } from 'react';
import Form from './Form';
import Todo from './Todo';
import Edit from './Edit';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    const [todoValue, setTodo] = useState(() => {
        const savedTasks = localStorage.getItem('todoValue');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('todoValue', JSON.stringify(todoValue));
    }, [todoValue]);

    const createTodo = (task) => {
        if (task.trim() !== "") {
            const newTodo = {
                id: uuidv4(),
                task: task.trim(),
                isEditing: false,
                isCompleted: false
            };
            setTodo([...todoValue, newTodo]);
            setNewTask("");
            inputRef.current.focus();
        }
    };

    const deleteTodo = (id) => {
        setTodo(todoValue.filter((todo) => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodo(todoValue.map((todo) => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    const editTask = (newTask, id) => {
        setTodo(todoValue.map((todo) =>
            todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
        ));
    };

    const completeTodo = (id) => {
        setTodo(todoValue.map(task => 
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center text-white">
            <div className="w-full max-w-md">

                <Form 
                    createTodo={createTodo} 
                    newTask={newTask} 
                    setNewTask={setNewTask} 
                    inputRef={inputRef} 
                />

                <div className="mt-6 space-y-4">
                    {todoValue.map((todo) =>
                        todo.isEditing ? (
                            <Edit key={todo.id} editTodo={editTask} task={todo} />
                        ) : (
                            <Todo 
                                task={todo} 
                                key={todo.id} 
                                deleteTodo={deleteTodo} 
                                editTodo={editTodo}
                                completeTodo={completeTodo}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}