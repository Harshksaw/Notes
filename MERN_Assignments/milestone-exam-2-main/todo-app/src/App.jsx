import { useState, useEffect } from 'react'
import './App.css'

const getTodoData = () => {
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
  if (storedTodos) {
    return storedTodos
  }
}
function App() {
  const [inputData, setInputData] = useState('')
  const [todos, setTodos] = useState(getTodoData())
  const addTodos = () => {
    if (inputData !== '') {
      setTodos([...todos, { title: inputData, status: 'Pending' }])
      setInputData('')
    }
  }
  const handleUpdateStatus = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      const todo = { ...updatedTodos[index] };
      todo.status = todo.status === "Pending" ? "Complete" : "Pending";
      updatedTodos[index] = todo;
      return updatedTodos;
    });
  };


  const handleDelete = (index) => {
    const updatedTodos = todos.filter((el, idx) => {
      return idx !== index
    })
    setTodos(updatedTodos)
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <div className="container">
        <div className="input-box">
          <input type="text" placeholder='Create a todo' id='input' value={inputData} onChange={(e) => setInputData(e.target.value)} />
          <button className='add' onClick={addTodos}>Add</button>
        </div>
        <div className="todo-container">
          {
            todos.map((todo, idx) => {
              return (
                todo && (
                  <div className="todos" key={idx}>
                    <div className="heading">
                      <span className="todo-number">{idx + 1}.</span>
                      <h1 className="todo-title">{todo.title}</h1>
                    </div>
                    <span className="todo-status">Status : {todo.status}</span>
                    <div className="todo-btn">
                      <button className="update-status" onClick={() => handleUpdateStatus(idx)}>Update Status</button>
                      <button className="remove" onClick={() => handleDelete(idx)}>Remove</button>
                    </div>
                  </div>
                )
              );
            })
          }

        </div>
      </div>
    </>
  )
}

export default App
