The data in react always follows from parent to child components which makesnit unidirectional. for prevent this problem we use props drilling. for prevent props drilling we use context api.
# React Redux
"Redux" is a pattern and library for managing and updating "application state", using events called "actions". it serves as a "centralized store" for state that needs to be used "across your entire application", with rules ensuring that the state can only be updated in a "predictable" fashion.
1. Redux ACTION = What To Do?
2. Redux REDUCER = How To Do?
3. Redux STORE = Object which holds the state of the application.
4. Redux Functions Associated With Store = createStore(), dispatch(action), getState()

## Redux ACTION:	Pure Object
Action are plain javascript "object" that have a type field. Actions only tell "what to do", but they didn't tell how to do.
return {
	type: "INCREMENT",
	payload: num
}
Action Creator: Pure function which creates an action.
export const incNumber = num => {
	return {
		type: "INCREMENT",
		payload: num
	}
}

## Redux REDUCER: 
Reducer are functions that take the "current State" and an "action" as an arguments and return a "new State" result.
const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
	switch (action.type) {
		case "type1" : return state + action.payload;
		case "type2" : return satte - 1;
		default : return state;
	}
}

## Redux Store:
The Redux store brings together the "state", "actions", and "reducer", that make up your app. It's important to note that you'll only have a "single store" in a redux application. Every Redux store has a "single root" reducer function.

import {createStore} from 'react-redux';
const store = createStore(rootReducer);

## Redux Principles:
Single Source Of Truth: The global state of your application is stoored as an Object inside a single store. State Is Read Only: The Only way to change the state is to dispatch an action. Immutability, one-way data flow, predictability of outcome changes are made with pure reducer functions.

` npm start `
` npm install redux react-redux `
