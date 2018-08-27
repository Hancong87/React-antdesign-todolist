import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});


//redux-thunk使得可以在aciton里面写异步代码，之前action只能是对象，现在可以是（异步）函数
export const getTodoList = () => {
  return (dispatch) => {
      axios.get('/api/todolist').then((res) => {
          const data = res.data;
          const action = initListAction(data);
          dispatch(action);
      });
  }
};