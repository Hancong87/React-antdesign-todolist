import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index.js';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
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
        store.subscribe(this.handleStorechange);
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input
                    value={this.state.inputValue}
                    placeholder="todo info"
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
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