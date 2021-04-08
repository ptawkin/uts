import actionTypes from '../actions/actionTypes';

const initialState = {
    isPending: false,
    isError: false,
    messagesList: [],
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.MESSAGES_LOADING_ERROR:
            return {
                ...state,
                isPending: false,
                isError: true,
            };

        case actionTypes.MESSAGES_LOADING_PENDING:
            return {
                ...state,
                isPending: true,
                isError: false,
            }

        case actionTypes.MESSAGES_LOADING_SUCCESS:
            return {
                ...state,
                isPending: false,
                isError: false,
                messagesList: action.messages,
            }

        default:
            return state;
    }
}