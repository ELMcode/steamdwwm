import {legacy_createStore as createStore} from "redux";

const initialState = {
    words: ["test"],
};

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                words: [...state.words, action.payload],
            }
        case "REMOVE":
            return {
                ...state,
                words: state.words.filter((word, index) => word !== action.payload),
            }
        default:
            return state;
    }

}


const store = createStore(wordReducer);

export default store;