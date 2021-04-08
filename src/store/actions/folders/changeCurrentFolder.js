import actions from '../actionTypes';
import data from '../../../data/mailData.json';

export default function loadMessages(folderId) {
    return (dispatch) => {
        dispatch({
            type: actions.MESSAGES_LOADING_PENDING
        });

        setTimeout(() => {
            try {
                dispatch({
                    type: actions.MESSAGES_LOADING_SUCCESS,
                    messages: data[folderId].messages
                });
            } catch(e) {
                dispatch({
                    type: actions.MESSAGES_LOADING_ERROR,
                })
            }
        }, 500);
    };
}