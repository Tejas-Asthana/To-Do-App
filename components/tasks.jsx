import React from 'react';
import NewTask from './newTask.jsx'

class Tasks extends React.Component {
  constructor() {
    super()
    // {
    //   id: 2,
    // checked: true,
    //   task: "Check the checkbox if you have completed a task"
    // },
    this.state = {
      allTasks: [
        {
          id: 1,
          checked: false,
          task: "Enter A new task in the input field and hit enter"
        },
        {
          id: 2,
        checked: true,
          task: "Check the checkbox if you have completed a task"
        },
        {
          id: 3,
          checked: false,
          task: "Hit delete icon if you want to delete a task"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    const taskText = document.getElementById('inputField').value

    this.setState(prev => {
      const newTask = {
          id: prev.allTasks.length + 1,
          task: taskText
      }
      return prev.allTasks.push(newTask)
    })

    console.log(this.state.allTasks, event.target.value)
  }

  render() {
    const tasks = this.state.allTasks.map(value => {
      return <NewTask key={value.id} text={value.task} checked={value.checked}/>
    })

    return (
      <div className="tasks-container">
        <div className="input-task">
          <form>
            <input
              id="inputField"
              type="text"
              placeholder="Enter a new task here"
              className="TaskField"
              name="task"
            />
            <button target="_blank" onClick={this.handleClick}>
              <i className="fas fa-plus-circle"  />
            </button>
          </form>
        </div>
          {tasks}
      </div>
    )
  }
}

export default Tasks
