import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';

const defaultState = {
    inputValue: '123',
    list: [1,2]
}

// reducer 可以接受state，但是绝不能修改state
// Reducer必须是纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
// 如果下面new Date，则不是纯函数，一旦函数里面有setTimeout/ajax请求/跟日期相关的内容，都不是纯函数
// 副作用，指的是对参数的修改，如上面写的"绝不能修改state"
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    console.log(state, action);
    return state;
}