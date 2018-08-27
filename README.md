store 是唯一的
只有store能够改变自己的内容
Reducer必须是纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用


createStore
store.dispatch
store.getState
store.subscribe


中间件是对action与store之间的dispatch方法的一个升级，以前只能是object，现在可以是函数
dispatch可以根据参数的不同，做不同的事情
object则直接传给store，函数则先执行完，再传给store

中间件指的是redux的中间件，把异步函数都放在action 中，有助于代码的自动化测试，和拆分管理

redux-saga比redux-thunk复杂，而且api更多，适合大型复杂项目，本课程使用thunk