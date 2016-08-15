import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from 'TodoList/actions/TodoActions'
import AddTodo from 'TodoList/components/Todo/AddTodo'
import TodoList from 'TodoList/components/Todo/TodoList'

class App extends Component {
  render() {
    const { dispatch, todos } = this.props
    {/*
      The code above is the same as
      const a = this.props.dispatch
      const b = this.props.todos
      tell me why
    */}
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
        <TodoList todos={todos} onTodoClick={index => dispatch(toggleTodo(index))}/>
      </div>
    )
  }
}

export default connect(state => state)(App);
