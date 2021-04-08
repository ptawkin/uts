import actions from '../actionTypes';
import data from '../../../data/mailData.json';

export default function changeCurrentFolder(folderId, folderName) {
    return (dispatch) => {
        dispatch({
            type: actions.CURRENT_FOLDER_CHANGE,
            folderId,
            folderName,
        });
    };
}