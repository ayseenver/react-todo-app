import { action } from 'easy-peasy'

export default {
  todos: axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.data)
}

componentDidMount () {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data} ))
}

//Actions
toggle: action((state, id) => {
  state.todos.map(todo => {
    if (todo.id === id){
      todo.completed = !todo.completed
    }
  })
})
