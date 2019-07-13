import { combineReducers } from 'redux';

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                ...state,
                {...action.post}
            ];
        default:
            return state;
    }
}
const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {...action.comment}
            ];
        default:
            return state;
    }
}

// 组合用的reducer
// const mainReducer = (state = {}, action) => {
//     return {
//         posts: postsReducer(state.posts, action),
//         comments: commentsReducer(state.comments, action)
//     }
// }

const mainReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
});

export default mainReducer;