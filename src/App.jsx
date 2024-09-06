import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/todo-list">Todo list</Link>{' '}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;