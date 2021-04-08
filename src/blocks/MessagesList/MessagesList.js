import {connect} from 'react-redux';
import React, {useEffect} from "react";
import classnames from 'classnames';

import SortComponent from '../SortComponent/SortComponent';
import SearchComponent from '../SearchComponent/SearchComponent';

import loadMessages from '../../store/actions/messages/loadMessages';
import changeCurrentMessage from '../../store/actions/messages/changeCurrentMessage';

import getFolderNameById from '../../selectors/getFolderNameById';

import './MessagesList.scss';

const mapStateToProps = (state) => ({
    messages: state.messages,
    currentFolder: state.currentFolder,
    currentFolderName: getFolderNameById(state, state.currentFolder.id),
    currentMessage: state.currentMessage,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (folderId) => dispatch(loadMessages(folderId)),
        changeCurrentMessage: (messageId) => dispatch(changeCurrentMessage(messageId))
    };
};

function MessagesList(props) {

    const {
        currentFolder,
        currentFolderName,
        messages,
        fetchData,
        currentMessage,
        changeCurrentMessage,
    } = props;

    // TODO: флаг и знания о прочитанности/непрочитанности письма

    useEffect(() => {
        if (currentFolder && currentFolder.id) {
            fetchData(currentFolder.id);
        }
    }, [currentFolder.id]);

    useEffect(() => {
        if (currentMessage && currentMessage.id) {
            fetchData(currentMessage.id);
        }
    }, [currentMessage.id]);

    const messagesList = messages.messagesList;

    const handleClick = React.useCallback((e) => {
        let item = e.target;
        let itemId;
        console.log(e.target)

        for (let i = 0; i < 3; i++) {
            if (!item.hasAttribute('data-id')) {
                item = item.parentNode;
            } else {
                itemId = item.getAttribute('data-id');
                break;
            }
        }

        if (itemId && itemId !== currentMessage.id) {
            changeCurrentMessage(itemId);
        }
    }, [ currentMessage.id ])


    function renderMessagesList(messages) {
        return messages.map((message) => {
            return (
                <div
                    className={classnames('messages-list__item', `message-preview`, {
                        'message-preview_active': message.id === currentMessage.id,
                    })}
                    data-id={ message.id}
                    key={ message.id }
                    onClick={ handleClick }
                >
                    <div className={ 'message-preview__header' }>
                        <div className={'message-preview__title'}>
                            { message.title }
                        </div>

                        <div className={ 'message-preview__date' }>
                            { message.date }
                        </div>
                    </div>

                    <div className={'message-preview__body'}>
                        <div className={'message-preview__author'}>
                            { message.author }
                        </div>

                        {/*{data[message].attachments.length !== 0 &&*/}
                        <div className={ 'message-preview__file-icon' }>

                        </div>
                        {/*}*/}
                    </div>
                </div>
            )
        })
    }


    return (
        <div className={'messages-list'}>
            <div className={'messages-list__search'}>
                <SearchComponent />
            </div>

            <div className={'messages-list__header'}>
                <div className={'messages-list__header-name'}>
                    { currentFolderName }
                </div>
                <div className={'messages-list__sort'}>
                    <SortComponent/>
                </div>
            </div>

            { messagesList.length !== 0 && (
                <div className={'messages-list__items'}>
                    { renderMessagesList(messagesList) }
                </div>
            )}

            {!messagesList.length && (
                <div className={'messages-list__empty'}>
                    List is empty
                </div>
            )}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
