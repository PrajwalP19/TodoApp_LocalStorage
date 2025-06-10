import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
  
  const [todo, setTodo] = useState('')

  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()

    if(!todo) return 

    addTodo({todo, completed: false})

    setTodo('')
  }

    return (
       <form className="flex shadow-md rounded-lg overflow-hidden" onSubmit={add}>
  <input
    type="text"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    placeholder="Write a new task..."
    className="w-full px-4 py-2 outline-none text-black bg-white/90 placeholder:text-gray-500 transition-all duration-200 focus:bg-white"
  />
  <button
    type="submit"
    className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold transition-all duration-300"
  >
    Add
  </button>
</form>

    );
}

export default TodoForm;

