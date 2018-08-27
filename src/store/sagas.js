import { takeEvery, put } from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import axios from 'axios';
import {initListAction} from './actionCreators';

function* getInitList() {
    console.log('abc');
    try {
        const res = yield axios.get('/api/todolist');
        const action = initListAction(res.data);
        yield put(action);
    } catch(e) {
        console.log('list.json 网络请求失败');
    }

}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;