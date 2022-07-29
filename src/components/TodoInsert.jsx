import React from 'react';
import { MdAdd } from 'react-icons/md';
import '../style/TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form action="" className="TodoInsert">
      <input type="text" placeholder="할일을 입력하세요." />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
