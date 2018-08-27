import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index.js';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStorechange = this.handleStorechange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        store.subscribe(this.handleStorechange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        axios.get('/api/todolist').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        });
    }

    handleInputChange(e) {

        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }

        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);

        console.log(e.target.value);
    }

    handleStorechange() {
        console.log('store changed');
        this.setState(store.getState());
    }

    handleBtnClick() {
        // const action = {
        //   type: ADD_TODO_ITEM
        // };
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;