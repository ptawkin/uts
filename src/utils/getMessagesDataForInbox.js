import * as data from '../data/mailData.json';

export default function getMessagesDataForInbox() {
    let messagesData;

    if (data.inbox && data.inbox.messages) {
        messagesData = data.inbox.messages;
    }

    return messagesData;
}