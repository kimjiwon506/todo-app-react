import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

// TODO: TodoTemplate, TodoInsert, TodoListItem, TodoList 네개의 컴포넌트로 분리해서 만들기
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '할일 입력하기', checked: true },
  ]);

  const nextId = useRef(2);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current, 
      text, 
      checked: false
    }
    setTodos(todos.concat(todo))
    nextId.current += 1;
  })

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </div>
  );
}

export default App;
