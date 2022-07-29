import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState } from 'react';

// TODO: TodoTemplate, TodoInsert, TodoListItem, TodoList 네개의 컴포넌트로 분리해서 만들기
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '할일1', checked: false },
    { id: 2, text: '할일2', checked: false },
    { id: 3, text: '할일3', checked: false },
  ]);
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
