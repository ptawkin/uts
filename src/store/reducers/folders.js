import actionTypes from '../actions/actionTypes';
import data from '../../data/mailData.json';

const initialState = {
    id: data.inbox.id,
    name: data.inbox.name,
}

export default function currentFolder(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CURRENT_FOLDER_CHANGE:
            return {
                ...state,
                id: action.id,
                name: action.name,
            };

        default:
            return state;
    }
}