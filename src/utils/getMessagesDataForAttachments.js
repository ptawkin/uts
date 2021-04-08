import * as data from '../data/mailData.json';

export default function getMessagesDataForAttachments() {
    const messagesData = [];

    for (let section in data.default) {
        for (let message in data.default[section].messages) {
            if (data.default[section].messages[message].attachments &&
                data.default[section].messages[message].attachments.length) {
                messagesData.push(message);
            }
        }

    }

    return messagesData;
}