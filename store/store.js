import { createStore } from 'redux';

const initialState = {
    movies: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setMovies': {
            return {
                ...state,
                movies: action.value,
            };
        }
        default:
            return state;
    }
};

export default createStore(reducer);
