import * as data from '../data/mailData.json';

export default function getMessagesDataForTrash() {
    let messagesData;

    if (data.inbox && data.trash.messages) {
        messagesData = data.trash.messages;
    }

    return messagesData;
}