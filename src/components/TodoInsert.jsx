import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../style/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  };
  return (
    <form action="" className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
