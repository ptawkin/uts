import * as data from '../data/mailData.json';

export default function getMessagesDataForSentMail() {
    let messagesData;

    if (data.inbox && data.sentMail.messages) {
        messagesData = data.sentMail.messages;
    }

    return messagesData;
}