import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            newTodo :{
                name: '',
                description :'',
                time:''
            }
        }
    }

    addTodo =() => {
        const {newTodo, todos} = this.state
        if (newTodo.name.trim() === '') return
        const newTodos = [...todos, newTodo]
        this.setState({todos: newTodos, newTodo : {
            name: '',
            description :'',
            time:''
        } })
    }

    
    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState((p) => ({
            newTodo: {
                ...p.newTodo,
                [name] : value
            }
        }))
    }
 


  render() {
    const {todos, newTodo} = this.state;

    return (
      <div>
        <h1>ToDo List</h1>
        <input type="text" name='name' value={newTodo.name} onChange={this.handleChange} placeholder='name of the task' />

        <textarea name='description' value={newTodo.description} onChange={this.handleChange} placeholder='description' />
        <input type="time" name="time" value={newTodo.time} onChange={this.handleChange} min="00:00" max="23:59" />
        <button onClick={this.addTodo}>Add Task</button>

        <ul>
            {todos.map((todo, index) => (
                <li key={index}> 
                    <strong>{todo.name}</strong> : {todo.description}{todo.time}
                </li>
            ))}
        </ul>
      </div>
      
    )
  }
}
