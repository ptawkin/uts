import * as data from '../data/mailData.json';

export default function getMessagesDataForDrafts() {
    let messagesData;

    if (data.inbox && data.drafts.messages) {
        messagesData = data.drafts.messages;
    }

    return messagesData;
}