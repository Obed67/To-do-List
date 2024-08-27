import React from 'react'
import TodoList from './components/TodoList'
import PlanImage from './assets/background.jpg'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${PlanImage})` }} >

      <div className="bg-transparent border-2 border-purple-300 p-8 rounded-lg backdrop-filter backdrop-blur-lg w-96">
        <h1 className="text-white text-3xl text-center mb-6">Mes tâches</h1>
        <TodoList />
      </div>
    
    </div>
  )
}
