import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setFilter } from "../redux/actions/actions";

export default function BarTodo () {

    const theme = useSelector(state => state.themeLight)
    const [active, setActive] = useState("all");
    const dispatch = useDispatch();
    const remaining = useSelector(state => state.showedList.filter(t => !t.completed))
    let todos = useSelector(state => state.todos);

    const handleClick = (filter, status)=> {
        dispatch(setFilter(filter))
        setActive(status)
    }
    const handleDelete = ()=> {
        let completed = true;
        dispatch(deleteTodo(completed, "completed"));
    }
    
    useEffect(() => {
        dispatch(setFilter(active))
    },[dispatch, active, todos.length])
  

    return (
        <div className= {`todo-bottom-container ${theme ? "": "todo-bottom-container-light"}`}>
            <div className={`todo-bottom-left bottom-items remaining ${theme ? "": "bottom-items-light"}`}>
                <p className="remaining">{remaining.length} 
                &nbsp;items left</p>
            </div>
            
            
            <div className= {`todo-bottom-center  bottom-items status ${theme ? "": "bottom-items-light"}`}>
                <p className= {`all ${active === "all" ? "active-class":""}`} 
                onClick={()=>handleClick("all", "all")}>
                    All</p>
                <p className={`active ${active === "active" ? "active-class":""}`} 
                onClick={()=>handleClick("active","active")}>
                    Active</p>
                <p className={`completed ${active === "completed" ? "active-class":""}`}  
                onClick={()=>handleClick("completed", "completed")}>
                    Completed</p>
            </div>
            <div className={`todo-bottom-right bottom-items clearCompleted ${theme ? "": "bottom-items-light"}`}>
                <p className={`clear-completed`} 
                onClick={()=> {handleDelete(); handleClick(null, "all");
                }}>
                    Clear Completed</p>
            </div>
        </div>
    )
}