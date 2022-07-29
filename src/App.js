import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState } from 'react';

// TODO: TodoTemplate, TodoInsert, TodoListItem, TodoList 네개의 컴포넌트로 분리해서 만들기
function App() {
  const [todos , setTodos] = useState([{id:1, text:'리액트기초알아보기',checked:true}, {id:2, text:'컴포넌트 스타일링 해보기',checked:true}, {id:3, text:'리액트기초알아보기',checked:false}]);
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
