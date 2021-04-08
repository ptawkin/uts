import actions from '../actionTypes';
import data from '../../../data/mailData.json';

export default function changeCurrentFolder(folderId) {
    return (dispatch) => {
        dispatch({
            type: actions.CURRENT_FOLDER_CHANGE,
            id: folderId,
        });
    };
}