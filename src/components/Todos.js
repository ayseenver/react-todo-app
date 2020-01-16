import React, { Fragment, useEffect } from "react";
import TodoItem from './TodoItem';
import { useStoreState, useStoreActions } from "easy-peasy";

const Todos = () => {
  const todos = useStoreState(state => state.todos);
  const fetchTodos = useStoreActions(actions => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
    </Fragment>
  );
};

export default Todos;
