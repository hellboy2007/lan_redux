import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import mainReducer from './reducer';
import { Provider } from 'react-redux';

import App from './components/App';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(mainReducer);

const log = () => {
    console.log(store.getState());
}

store.subscribe(log)
log()

store.dispatch(
    { 
        type: 'ADD_POST',
        post: {
            id: 1,
            title: 'hello,this is your ticket'
        }
     }
);

store.dispatch(
    { 
        type: 'ADD_POST',
        post: {
            id: 1,
            title: 'you are very nice man!'
        }
     }
);

store.dispatch(
    { 
        type: 'ADD_COMMENT',
        comment: {
            id: 1,
            postId: 1,
            content: 'very nice!'
        }
     }
);

store.dispatch(
    { 
        type: 'ADD_COMMENT',
        comment: {
            id: 2,
            postId: 1,
            content: 'juju, boy!!'
        }
     }
);


// var arr = [1,2,3,4,5,6,7,8,0];
// arr.forEach(item=>{
//     store.dispatch({ type: 'INCREMENT' } );
// })
console.log('out store:', store);
render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('root'));