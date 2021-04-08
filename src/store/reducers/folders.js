import actionTypes from '../actions/actionTypes';
import data from '../../data/mailData.json';

const initialState = {
    foldersList: [],
}
//все папки
export default function folders(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_FOLDERS_LIST:
            return {
                ...state,
                foldersList: action.folders,
            };

        default:
            return state;
    }
}