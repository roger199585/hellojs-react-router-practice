/*import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <li onClick={this.props.onTodoClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
        <button onClick={this.props.onDelClick}>
         X
        </button>
      </li>
    )
  }
}

Todo.propTypes = {
  onDelClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
*/
/*
  The code above will have a bug
  when you delete the last item
  the browser will have a Error:
  TypeError: state[action.index] is undefined
  Because the code above will delete the item
  first and then trigger the actions.
  The action that was trigger can't find the
  item which have to be change (the item have been delete)
  Therefor, the error will happen
*/

import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <li>
        <label onClick={this.props.onTodoClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
          }}>
          {this.props.text}
        </label>
        <button onClick={this.props.onDelClick}>
         X
        </button>
      </li>
    )
  }
}

Todo.propTypes = {
  onDelClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
