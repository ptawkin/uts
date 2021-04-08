import actionTypes from '../actions/actionTypes';
import data from '../../data/mailData.json';

//переделать
const initialState = {}

export default function currentFolder(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CURRENT_FOLDER_CHANGE:
            return {
                ...state,
                id: action.id,
            };

        default:
            return state;
    }
}