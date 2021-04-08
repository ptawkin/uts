import actions from '../actionTypes';
import data from '../../../data/mailData.json';

export default function changeCurrentMessage(messageId) {
    return (dispatch) => {
        dispatch({
            type: actions.CURRENT_MESSAGE_CHANGE,
            id: messageId,
        });
    };
}