import React from 'react';
import TodoListItem from './TodoListItem';
import '../style/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        // console.log(todo);
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
