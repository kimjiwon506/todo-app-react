import React from 'react';
import TodoListItem from './TodoListItem';
import todoList from '../style/TodoList.scss';

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
