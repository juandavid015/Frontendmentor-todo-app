import React, { useState } from "react";
import iconCheck from "../images/icon-check.svg";
import {useDispatch, useSelector} from 'react-redux';
import { deleteTodo,  reeorderList,  switchTodo } from "../redux/actions/actions";
import crossIcon from "../images/icon-cross.svg";

export default function Todo ({topic, completed, index, id}) {
    
    const theme = useSelector(state => state.themeLight)
    const [check, setCheck] = useState(completed);
    const dispatch = useDispatch();

    const [dragStatus, setDragStatus] = useState({
        dragging: false,
        droppeable: false,
    })
     
    const handleClick = ()=> {
        setCheck(!check);
        dispatch(switchTodo(id))

    }
    
    const handleDelete = ()=> {
        dispatch(deleteTodo(id, "id"))
    }

    // drag events
    const handleDragStart = (e, index) => {
    
        setDragStatus((dragStatus)=> ({...dragStatus, dragging: true}))

        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.setData('text',  index)
    }   

    const handleDragEnter = (e) => {
        e.preventDefault();
        
    }
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragStatus((dragStatus)=> ({...dragStatus, droppeable: true, dragging: false}))
    }

    const handleDrop = (e, id) => {

        e.preventDefault();
        const data = e.dataTransfer.getData("text");
        const lastIndex = id;
        const firsIndex = Number(data);

        dispatch(reeorderList(firsIndex , lastIndex, id))
        setDragStatus((dragStatus)=> ({...dragStatus, droppeable: false, dragging: false}))  
    }

    const handleDragLeave = (e) => {
            setDragStatus((dragStatus)=> ({...dragStatus, droppeable: false}))
    }

    const handleDragEnd = (e) => {
    
        setDragStatus((dragStatus)=> ({...dragStatus, droppeable: false, dragging: false}))
    }

    let checked = <button onClick={handleClick} 
    style={{backgroundImage: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))" ,
    border: "0px solid transparent"}}><img alt ="check icon"src={iconCheck} style={{ visibility: "visible"}}/></button>
    let lineThrough = <p className="todo-text" style={{textDecoration:"line-through", color: theme? "hsl(234, 11%, 52%)":"hsl(236, 33%, 92%)"}} onClick={handleClick}>{topic}</p>
    
    return (
            <div id= {index} className= {`todo ${theme ? "": "todo-light"} ${dragStatus.dragging && "dragging"} ${dragStatus.droppeable && "droppeable"}`}
            onDragStart={(e)=>handleDragStart(e, id)} draggable={true}
            onDragEnter={(e)=>handleDragEnter(e, index)} onDragOver={(e)=>handleDragOver(e, index)} onDrop={(e)=>handleDrop(e, id)} 
            onDragEnd={handleDragEnd} onDragLeave={handleDragLeave}>
            
                {check ? checked: <button onClick={handleClick}></button>}
                {check ? lineThrough: <p className="todo-text" onClick={handleClick}>{topic}</p>}
                <img className ="todo-cross-icon" alt="cross icon" src={crossIcon} onClick={handleDelete}></img>

            </div>          
    )   
}