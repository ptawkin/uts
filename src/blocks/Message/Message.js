import React, {useEffect} from 'react';
import {connect} from "react-redux";

import ActionButtonsBlockForMessage from '../ActionButtonsBlockForMessage/ActionButtonsBlockForMessage';

import getMessageById from '../../selectors/getMessageById';
import prepareMessageText from '../../utils/prepareMessageText';

import avatar from '../../img/ava.png';

import './Message.scss';


const mapStateToProps = (state) => ({
    messages: state.messages,
    currentMessage: state.currentMessage,
    messageContent: getMessageById(state, state.currentMessage.id),
});


function Message(props) {

    const {
        messageContent,
    } = props;

    const messageText = messageContent && prepareMessageText(messageContent.text);

    return (
        <div className={'message'}>
            <div className={'message__action-block'}>
                <ActionButtonsBlockForMessage/>
            </div>

            {messageContent && (
                <div className={'message__content'}>
                    <div className={'message__title'}>
                        {messageContent.title}
                    </div>

                    <div className={'message__heading'}>
                        <div className={'message__avatar'}>
                            <img alt={'ava'} src={avatar}/>
                        </div>

                        <div className={'message__info'}>
                            <div className={'message__part message__part_top'}>
                                <div className={'message__author'}>
                                    {messageContent.author}
                                </div>

                                <div className={'message__date'}>
                                    {messageContent.date}
                                </div>
                            </div>

                            <div className={'message__part message__part_bottom'}>
                                <div className={'message__email'}>
                            <span>
                                From:&nbsp;
                            </span>
                                    {messageContent.email}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'message__text'}>
                        {messageText.map((text) => {
                            return (
                                <p> { text } </p>
                            )
                        })}
                    </div>

                    <div className={'message__attachments'}>

                    </div>

                    <div className={'message__actions'}>
                        <button className={'message__button message__button_reply'}>
                            Reply
                        </button>

                        <button className={'message__button message__button_farward'}>
                            Forward
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default connect(mapStateToProps)(Message);
