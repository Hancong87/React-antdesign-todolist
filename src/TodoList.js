import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index.js';

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
        console.log(this.state);
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input value={this.state.inputValue} placeholder="todo info" style={{width: '300px', marginRight: '10px'}}/>
                <Button type="primary">Submit</Button>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList;