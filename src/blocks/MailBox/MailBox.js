import React, {useEffect} from 'react';
import {connect} from "react-redux";

import classnames from 'classnames';

import loadFoldersList from '../../store/actions/folders/loadFoldersList';
import changeCurrentFolder from '../../store/actions/folders/changeCurrentFolder';
import changeCurrentMessage from '../../store/actions/messages/changeCurrentMessage';

import getMessagesCount from '../../utils/getMessagesCount';
import getMessagesDataForInbox from '../../utils/getMessagesDataForInbox';
import getMessagesDataForSentMail from '../../utils/getMessagesDataForSentMail';
import getMessagesDataForDrafts from '../../utils/getMessagesDataForDrafts';
import getMessagesDataForTrash from '../../utils/getMessagesDataForTrash';
import getMessagesDataForAttachments from '../../utils/getMessagesDataForAttachments';

import './MailBox.scss';


const mapStateToProps = (state) => ({
    folders: state.folders,
    currentFolder: state.currentFolder,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(loadFoldersList()),
        changeCurrentFolder: (folderId) => dispatch(changeCurrentFolder(folderId)),
        changeCurrentMessage: (messageId) => dispatch(changeCurrentMessage(messageId))
    };
};

function MailBox(props) {
    const messagesCount = getMessagesCount();

    const {
        folders,
        currentFolder,
        fetchData,
        changeCurrentFolder,
        changeCurrentMessage,
    } = props;

    const foldersList = folders.foldersList;
    const [ isFoldersLoaded, setIsFoldersLoaded ] = React.useState(false);

    useEffect(() => {
        fetchData()
            .then(() => {
                setIsFoldersLoaded(true);
            });
    }, [ setIsFoldersLoaded, fetchData ]);

    React.useEffect(() => {
        if (isFoldersLoaded) {
            changeCurrentFolder(foldersList[0].id);
        }
    }, [ isFoldersLoaded ]);


    const handleClick = React.useCallback((e) => {
        let itemId;

        if (e.target.hasAttribute('data-id')) {
            itemId = e.target.getAttribute('data-id');
        } else {
            itemId = e.target.parentNode.getAttribute('data-id');
        }

        if (itemId !== currentFolder.id) {
            changeCurrentFolder(itemId);
            changeCurrentMessage();
        }
    }, [ currentFolder.id ])

    return (
        <div className={'mail-box'}>
            <div className={'mail-box__header'}>
                MailBox
            </div>
            <div className={'mail-box__items'}>
                {foldersList.map((folder) => {
                    return (
                        <div className={classnames('mail-box__item', `mail-box__item_${folder.name}`, {
                            'mail-box__item_active': folder.id === currentFolder.id,
                        })}
                             data-id={folder.id}
                             key={folder.id}
                             onClick={handleClick}
                        >
                            <div className={'mail-box__item-icon'}>

                            </div>
                            <div className={'mail-box__item-text'}>
                                {folder.name}
                            </div>
                            {messagesCount.inboxCount !== 0 && (
                                <div className={'mail-box__item-count'}>
                                    ({messagesCount.inboxCount})
                                </div>
                            )}
                        </div>
                    )
                })}
                <div className={'mail-box__item mail-box__item_more'}>
                    <div className={'mail-box__item-icon'}>

                    </div>
                    <div className={'mail-box__item-text'}>
                        More...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MailBox);
