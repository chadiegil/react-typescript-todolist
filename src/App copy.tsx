import React, { FC, useState, ChangeEvent } from "react"
import "./App.css"

type TodoItem = {
  task: string
  deadLine: number
}

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadLine, setDeadLine] = useState<number>(0)
  const [todo, setTodo] = useState<TodoItem[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if (name === "task") {
      setTask(value)
    } else if (name === "deadLine") {
      setDeadLine(parseInt(value))
    }
  }

  const handleAddTask = () => {
    const newTask: TodoItem = { task, deadLine }
    setTodo([...todo, newTask])
    setTask("")
    setDeadLine(0)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadLine"
            placeholder="Deadline in days.."
            value={deadLine}
            onChange={handleChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
      <div className="todoList">
        <ul>
          {todo.map((item, index) => (
            <li key={index}>
              Task: {item.task}, Deadline: {item.deadLine} days
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
