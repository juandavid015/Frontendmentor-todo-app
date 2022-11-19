
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import BarTodo from './components/BarTodo';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import iconSun from "./images/icon-sun.svg";
import iconMoon from "./images/icon-moon.svg"
import { setTheme } from './redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeLight)
  const handleTheme = ()=> {
    dispatch(setTheme(true))
  }
  return (

    <main className={`App ${theme === true ? "": "light-theme"}`}>
      <div className='todo-container'>
        <div className='todo-top-container'>
          <div className='todo-top-design'>
            <h1 className='top-design-title'>TODO</h1>
            <button className= "top-design-modeBtn" aria-label= "change mode"
            onClick={handleTheme}>
              <img className = "modeBtn-icon icon-sun"src={theme ? iconSun: iconMoon} alt= "sun icon"></img>
            </button>
          </div>
        </div>
        <CreateTodo />
        <TodoList />
        <BarTodo />
      </div>
      <p className='todo-text-info'>Drag and drop to reorder list</p>
      
    </main>
  );
}

export default App;
