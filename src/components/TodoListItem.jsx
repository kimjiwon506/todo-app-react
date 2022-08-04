import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import '../style/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove }) => {
  const { text, id, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} id={id} key={id}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
          // console.log(todo.id, id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
