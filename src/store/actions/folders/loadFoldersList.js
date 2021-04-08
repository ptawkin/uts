import actions from '../actionTypes';
import data from '../../../data/mailData.json';

//получить все папки
export default function loadFoldersList() {
    return (dispatch) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch({
                    type: actions.LOAD_FOLDERS_LIST,
                    folders: Object.keys(data).map((key) => ({
                        id: data[key].id,
                        name: data[key].name,
                    }))
                });

                resolve();
            }, 300);
        })
    };
}