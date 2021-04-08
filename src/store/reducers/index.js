import { combineReducers } from 'redux';
import folders  from './folders';
import currentFolder  from './currentFolder';
import messages  from './messages';
import currentMessage  from './currentMessage';

export default combineReducers({
    folders,
    currentFolder,
    messages,
    currentMessage,
});
