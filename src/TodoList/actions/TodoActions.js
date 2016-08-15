// action type (set up a name for action)
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// action creator (usually will have the same name with action type)
export function addTodo(text) {
  return {type: ADD_TODO, text}
}
//the function above is the same as
/*
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}
*/

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

//the function above is the same as
/*
export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index: index
  }
}
*/
