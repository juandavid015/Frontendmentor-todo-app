
import { useSelector} from 'react-redux';

import Todo from "./Todo";

export default function TodoList (theme) {

    const showedList = useSelector(state => state.showedList);
    
    return (
        
        <div className='todo-body-container'>
            {showedList?.map((todo, i) => (
                
            
                <Todo 
                key={todo.topic + todo.id}
                topic ={todo.topic}
                completed = {todo.completed}
                index = {i} 
                id = {todo.id} 
                theme = {theme}

                />
                ))}
                
                 
        </div>
         
    )
}