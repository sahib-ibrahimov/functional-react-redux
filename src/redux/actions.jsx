export function addAction(data) {
  return {
    type: 'ADD_MESSAGE',
    payload: data
  }
}

export function delAction(data) {
  return {
    type: 'DEL_MESSAGE'
  }
}
