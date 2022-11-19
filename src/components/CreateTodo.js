import React, { useState } from "react";
import iconCheck from "../images/icon-check.svg";
import {useDispatch, useSelector} from 'react-redux';
import { addTodo } from "../redux/actions/actions";

export default function CreateTodo () {
    
    const dispatch = useDispatch();
    const theme = useSelector(state => state.themeLight)
    const [check, setCheck] = useState(false);
    const [input, setInput] = useState({
        input: ""
    })
    
    
    const handleChange = (e) => {
        
        setInput({input: e.target.value})
        if(input) setCheck(false);

    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        let inputs = input.input.trim();

        setCheck(!check);
        if(inputs){
           
            dispatch(addTodo(inputs));
        }
        
        setInput({input: ""})    
    }
    
    let checked = <button onClick={(e)=> handleSubmit(e)} 
    style={{backgroundImage: "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))" ,
    border: "0px solid transparent"}}><img alt ="icon check" src={iconCheck} style={{ visibility: "visible"}}/></button>
 
    return (
        <form className={`top-todo-create ${theme ? "": "header-light"}`} onSubmit={(e)=> handleSubmit(e)}>
            
               {check ? checked: <button onClick={(e)=> handleSubmit(e)}></button>}
            
            <input id= "create-input-text"type="text" placeholder="Create a new todo..." value= {input.input} onChange={(e)=> handleChange(e)}/>
        </form>
    )
}

