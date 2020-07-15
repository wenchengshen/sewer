import { createStore } from 'redux';
import reducers from '../reducers'

const store = createStore(reducers);

//
const { providers,  searchKeyword } = store.getState();



let lastKeyword = searchKeyword;

//手动订阅更新
store.subscribe(() => {
    console.log("手动订阅更新",store.getState())

})

export default store;