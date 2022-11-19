# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

Desktop 

![](./public/design/Desktop%20Result%20(2).png)

Mobile

<img src="./public/design/Mobile%20result%20(2).png" width="375" />


### Links

- Live Site URL: [Vercel](https://your-live-site-url.com)

## My process


### Built with

- HTML
- CSS - Flexbox - Grid
- Javascript
- [React](https://reactjs.org/) - [Redux](https://es.redux.js.org/)


### What I learned

The most difficult thing about this project was to have a correct structure for tracking the states for the tasks that would be displayed. At first I downplayed this, but later, when I was working on the drag-and-drop I was struggling a little bit when I was re-ordering the whole, and this, because I had to keep in mind that when working with two states for everything (original list and mutable list) the second state depends on the first, so changing in the original state or not doing so will affect the copy state.

This is a code snippet for the reeorder logic, where I needed to change the order in both, the original and copy state, to avoid strange behavior, but it seems to be a bit heavy to be in the reducer, but it is the current solution.

```js
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
```
In CSS i keep with me a new concept: the break-word. Have knowledge of this can save you from many problems of content overflowing from the container, specially text. The break-all propertie let each word have break between lines. Which allows text to shrink along with the container.

```css
.todo p {
  word-break: break-all;
  ...
}
```


### Continued development

- For this project adding local storage to be capable of remind some todo's could be a good idea and will be the next step to focus and improve the App.

- Also, i think there's some code than can be refactored. For example, the reducer, look a little heavy. So, that's other point for improving.


### Useful resources

- [Drag and Drop ](https://www.w3schools.com/html/html5_draganddrop.asp) - This give me a good base for understanding how "Drag and Drop APÏ" works. Simple and concise.


## Author

- Frontend Mentor - [juandavid015](https://www.frontendmentor.io/profile/juandavid015)

