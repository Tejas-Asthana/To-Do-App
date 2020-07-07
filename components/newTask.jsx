import React from 'react'

// function newTask(props) {
class newTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      delete: false,
      done: props.checked //false
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  handleChange(props) {
    this.setState(prev => {
      return {
        done: !prev.done
      }
    })
    // this.props.checked = !prev.props.checked
  }

  deleteTask() {
    this.setState(prev => {
      return {
        delete: !prev.delete,
        // ...prev,
        done: !prev.done
      }
    })
  }

  render(props) {
    return (
        <div className="newTask" style={{display: this.state.delete ? 'none' : 'block',
                                        backgroundColor: this.state.done ? '#0da574' : '#083358'}}>
          <input type="checkbox" onChange={this.handleChange} title='completed' checked={this.state.done} />
          <span className="checkmark" />
          <label className="container-check">
            <i className="fas fa-trash delete-icon" id="delete" onClick={this.deleteTask} title='delete' />
            <span style={{fontStyle: this.state.done ? 'italic' : 'normal',
                          textDecoration: this.state.done ? 'line-through' : null,
                          display: 'block',
                          margin: '10px 0 -5px',
                          textAlign: 'right',
                          color: this.state.done ? 'white' : 'white'}} className="taskText" >{this.props.text}</span>
          </label>
        </div>
      )
    }
}

export default newTask

// checked="checked"

// <p className="taskText">
//   <i  className="fas fa-check-circle done-icon" id="done" onClick={this.handleClick} />
//   <i className="fas fa-trash delete-icon" id="delete" onClick={this.handleClick} />
//   {this.props.text}
// </p>
