import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import '../style/TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, id } = todo;
  return (
    <div className="TodoListItem">
      <div className="checkbox" id={id} key={id}>
        <MdCheckBoxOutlineBlank />
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
