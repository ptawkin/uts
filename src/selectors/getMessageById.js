export default function getMessageNameById(state, id) {
    if (state.messages && state.messages.messagesList) {
        const messages = state.messages.messagesList;

        for (let message in messages) {
            if (messages[message].id === id) {
                return messages[message];
            }
        }
    }
}