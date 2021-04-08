import * as data from '../data/mailData.json';

export default function getMessagesCount() {
    const messagesCount = {
        inboxCount: 0,
        sentMailsCount: 0,
        draftsCount: 0,
        trashCount: 0,
        attachmentsCount: 0,
    }

    // inboxCount
    if (data.inbox &&
        data.inbox.messages &&
        data.inbox.messages.length !== 0) {
        messagesCount.inboxCount = data.inbox.messages.length;
    }

    // sentMailsCount
    if (data.sentMail &&
        data.sentMail.messages &&
        data.sentMail.messages.length !== 0) {
        messagesCount.sentMailCount = data.sentMail.messages.length;
    }

    // draftsCount
    if (data.drafts &&
        data.drafts.messages &&
        data.drafts.messages.length !== 0) {
        messagesCount.draftsCount = data.drafts.messages.length;
    }

    if (data.trash &&
        data.trash.messages &&
        data.trash.messages.length !== 0) {
        messagesCount.trashCount = data.trash.messages.length;
    }

    // attachmentsCount
    //TODO: - как это сделать нормально????
    for (let section in data.default) {
        for (let message in data.default[section].messages) {
            if (data.default[section].messages[message].attachments &&
                data.default[section].messages[message].attachments.length !== 0) {
                messagesCount.attachmentsCount += data.default[section].messages[message].attachments.length;
            }
        }

    }

    return messagesCount;
}
