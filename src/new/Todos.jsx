import { memo } from "react"

const Todos = ({todos}) => {

    console.log('todo renderer')

  return (
    <div>
        <h3>My Todos</h3>
        {todos && todos.map(todo => <li key={todo}>{todo}</li>)}
    </div>
  )
};

export default memo(Todos)