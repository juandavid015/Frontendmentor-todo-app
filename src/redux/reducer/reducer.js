import { ADD_TODO, CHANGE_THEME, DELETE_TODO, REEORDER_LIST, SET_COUNT, SET_VISIBILITY,  SHOWED_LIST,  SWITCH_STATUS } from "../actions/actions"


const initState = {
    todos: [],
    listToShow : "all",
    showedList: [],
    itemsCount : 0,
    themeLight: false
}

export default function reducer(state = initState, action) {

    switch(action.type) {

        case ADD_TODO:
            return {
                ...state, 
                todos: [...state.todos, {id: state.todos.length++, topic: action.payload, completed: false}]
            }

        case DELETE_TODO:

            return {
                ...state,
                todos: [...state.todos.filter(todo => todo[action.format] !== action.payload)],
            }

        case CHANGE_THEME:

            return {
                ...state, 
                themeLight: !state.themeLight
            }
            
        case SET_VISIBILITY:

            let todos = [...state.todos];
            let filter = action.filter;
            let result;

            if (filter === 'all') {
                result = (todos.filter(todo => todo))
                
            } else if (filter === 'active') {
                let res = (todos.filter(todo => !todo.completed))
                result = res;
               
            } else if (filter === 'completed') {
                result = todos.filter(todo => todo.completed);
                
            } else {
                result = todos
            }

            return {...state, listToShow: action.filter, showedList: result}
      
        case SET_COUNT:
            return {
                ...state, 
                itemsCount: action.items
            }

        case SHOWED_LIST:
            return {
                ...state,
                showedList: action.list
            }

        case SWITCH_STATUS:

            state.todos.forEach(todo => {
                if (todo.id === action.payload) todo.completed = !todo.completed;
            })
            
            return {
                ...state,
                todos: [...state.todos]
            }
        
            case REEORDER_LIST: 

            let newTodos = [...state.todos];
            let newShowedList = [...state.showedList];
            let todoFirstItem = state.todos.find(todo => todo.id === action.payload.firstItem);
            let todolastItem = state.todos.find(todo => todo.id === action.payload.lastItem);
            let firstTodoIndex = state.todos.findIndex(todo=> todo.id === action.payload.firstItem);
            let lastTodoIndex = state.todos.findIndex(todo=> todo.id === action.payload.lastItem);
            let firstShowedIndex = state.showedList.findIndex(todo=> todo.id === action.payload.firstItem);
            let lastShowedIndex  = state.showedList.findIndex(todo=> todo.id === action.payload.lastItem);
   
            newTodos[firstTodoIndex] = todolastItem;
            newTodos[lastTodoIndex] = todoFirstItem; 
            newShowedList[firstShowedIndex] = todolastItem;
            newShowedList[lastShowedIndex] = todoFirstItem;
     
            return {
                ...state,
                showedList: newShowedList,
                todos: newTodos
            };

        default:
            return state;
            
    }
}