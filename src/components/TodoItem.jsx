import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

    return (
      <div
  className={`flex items-center gap-3 border border-white/20 rounded-lg px-4 py-2 shadow-md transition-all duration-300 ${
    todo.completed ? "bg-green-100/70 text-green-900" : "bg-white/80 text-gray-900"
  }`}
>
  <input
    type="checkbox"
    className="cursor-pointer accent-green-600 scale-125 transition"
    checked={todo.completed}
    onChange={toggleCompleted}
  />
  <input
    type="text"
    className={`flex-1 px-2 py-1 rounded-md outline-none transition-all duration-300 ${
      isTodoEditable ? "bg-white border border-gray-300" : "bg-transparent border-none"
    } ${todo.completed ? "line-through text-gray-500" : "text-black"}`}
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
  />
  <button
    className="w-8 h-8 rounded-full text-sm bg-blue-200 hover:bg-blue-300 transition disabled:opacity-50 flex items-center justify-center"
    onClick={() => {
      if (todo.completed) return;
      if (isTodoEditable) editTodo();
      else setIsTodoEditable((prev) => !prev);
    }}
    disabled={todo.completed}
  >
    {isTodoEditable ? "💾" : "✏️"}
  </button>
  <button
    className="w-8 h-8 rounded-full text-sm bg-red-200 hover:bg-red-300 transition flex items-center justify-center"
    onClick={() => deleteTodo(todo.id)}
  >
    ❌
  </button>
</div>

    );
}

export default TodoItem;
