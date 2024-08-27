import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsCheck2All } from "react-icons/bs";

export default function Todo({ task, deleteTodo, editTodo, completeTodo }) {
  return (
    <div className={`flex items-center justify-between bg-opacity-50 p-3 rounded-lg shadow-md ${task.isCompleted ? 'bg-green-600' : 'bg-purple-700'} mb-4`}>
      
      <p className={`text-lg ${task.isCompleted ? 'line-through' : ''}`}>
        {task.task}
      </p>

      <div className="flex items-center gap-x-3">
        <BsCheck2All 
          className={`cursor-pointer text-white ${task.isCompleted ? 'text-green-300' : ''}`} 
          onClick={() => completeTodo(task.id)} 
        />
        <AiFillEdit 
          className="cursor-pointer text-white" 
          onClick={() => editTodo(task.id)} 
        />
        <BsFillTrashFill 
          className="cursor-pointer text-white" 
          onClick={() => deleteTodo(task.id)} 
        />
      </div>
      
    </div>
  );
}