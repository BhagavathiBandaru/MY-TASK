import {Component} from 'react'

import {v4} from 'uuid'
import {TagButtonElement} from './styledComponents'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskCreater extends Component {
  state = {
    inputElement: '',
    inputTag: tagsList[0].optionId,
    taskList: [],
    activeTag: 'INITIAL',
  }

  submitForm = event => {
    event.preventDefault()
    const {inputElement, inputTag} = this.state
    const newTask = {
      id: v4(),
      task: inputElement,
      tag: inputTag,
    }
    if (inputElement.length !== 0) {
      this.setState(prevState => ({
        taskList: [...prevState.taskList, newTask],
        inputElement: '',
        inputTag: '',
      }))
    }
  }

  onChangeInput = event => {
    this.setState({inputElement: event.target.value})
  }

  onChangeTag = event => {
    this.setState({inputTag: event.target.value})
  }

  renderCreateTaskBlock = () => {
    const {inputElement, inputTag} = this.state
    return (
      <div className="create-task-block">
        <form className="create-form" onSubmit={this.submitForm}>
          <h1 className="creat-task-heading">Create a task!</h1>
          <div className="input-container">
            <label htmlFor="inputEle" className="labelText">
              Task
            </label>
            <input
              type="text"
              placeholder="Enter the task here"
              onChange={this.onChangeInput}
              value={inputElement}
              id="inputEle"
              className="inputElement"
            />
          </div>
          <div className="input-container">
            <label htmlFor="tagEle" className="labelText">
              Tags
            </label>
            <select
              className="select-block"
              type="text"
              onChange={this.onChangeTag}
              value={inputTag}
              id="tagEle"
            >
              {tagsList.map(eachTag => (
                <option key={eachTag.optionId} value={eachTag.optionId}>
                  {eachTag.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="add-task-btn">
            Add Task
          </button>
        </form>
      </div>
    )
  }

  onClickActivateTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  renderAddTaskBlock = () => {
    const {taskList, activeTag} = this.state
    return (
      <div className="add-task-display-block">
        <h1 className="task-heading">Tags</h1>
        <ul className="tagsList">
          {tagsList.map(eachTag => {
            const isActive = activeTag === eachTag.optionId
            return (
              <li key={eachTag.optionId} className="list-item">
                <TagButtonElement
                  type="button"
                  value={eachTag.optionId}
                  onClick={this.onClickActivateTag}
                  isActive={isActive}
                >
                  {eachTag.displayText}
                </TagButtonElement>
              </li>
            )
          })}
        </ul>
        <h1 className="task-heading">Tasks</h1>
        <ul className="task-view-container">
          {taskList.length === 0 ? (
            <p className="no-task-heading">No Tasks Added Yet</p>
          ) : (
            this.renderTaskItem()
          )}
        </ul>
      </div>
    )
  }

  renderTaskItem = () => {
    const {taskList, activeTag} = this.state
    const filteredTaskListItems =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(eachTask => eachTask.tag === activeTag)
    return (
      <div>
        {filteredTaskListItems.map(eachTaskItem => (
          <li className="task-list-ele" key={eachTaskItem.id}>
            <p className="task">{eachTaskItem.task}</p>
            <p className="tag">{eachTaskItem.tag}</p>
          </li>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        {this.renderCreateTaskBlock()}
        {this.renderAddTaskBlock()}
      </div>
    )
  }
}

export default TaskCreater
