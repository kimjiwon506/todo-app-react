import React from 'react';
import TodoListItem from './TodoListItem';
import '../style/TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        // console.log(todo);
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
