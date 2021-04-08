export default function getFolderNameById(state, id) {
    if (state.folders && state.folders.foldersList) {
        const folders = state.folders.foldersList;

        for (let folder in folders) {
            if (folders[folder].id === id) {
                return folders[folder].name;
            }
        }
    }
}