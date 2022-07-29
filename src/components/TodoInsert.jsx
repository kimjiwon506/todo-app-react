import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import todoInsert from '../style/TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  // const onChange = useCallback((e) => {
  //   return setValue(e.targe.value);
  // }, []);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form action="" className="TodoInsert">
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
