import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// TODO: TodoTemplate, TodoInsert, TodoListItem, TodoList 네개의 컴포넌트로 분리해서 만들기
function App() {
  return (
    <div className="App"> 
     <TodoTemplate>
      <TodoInsert />
      <TodoList />
     </TodoTemplate>
    </div>
  );
}

export default App;
