export const ADD_TODO = "ADD_TODO";
export const SWITCH_STATUS = "SWITCH_STATUS";
export const DELETE_TODO = "DELETE_TODO";
export const SET_VISIBILITY = "SET_VISIBILITY";
export const SET_COUNT = "SET_COUNT";
export const SHOWED_LIST = "SHOWED_LIST";
export const CHANGE_THEME = "CHANGE_THEME";
export const REEORDER_LIST = 'REEORDER_LIST';

export const addTodo = (topic) => {
    return {
        type: ADD_TODO,
        payload: topic
    }
}

export const switchTodo = (id) => {
    return {
        type: SWITCH_STATUS,
        payload: id
    }
}

export const deleteTodo = (payload, format)=> {
    return {
        type: DELETE_TODO,
        payload,
        format: format
    }
} 

export const setFilter= (filter)=> {
    return {type: SET_VISIBILITY, filter}
}

export const setCount = (items)=> {
    return {type: SET_COUNT, items}
}

export const visibleList = (list)=> {
    return {type: SHOWED_LIST, list}
}
export const setTheme = (theme) => {
    return {type: CHANGE_THEME, theme}
}

export const reeorderList = (firstItem, lastItem, id) => {
    return {type: REEORDER_LIST, payload: {firstItem: firstItem, lastItem: lastItem, id: id}}
} 