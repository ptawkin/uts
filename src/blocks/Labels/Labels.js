import './Labels.scss';
import React from "react";

export default function Labels() {
//    TODO: куда это должно вести?
    return (
        <div className={'labels'}>
            <div className={'labels__header'}>
                Labels
            </div>
            <div className={'labels__items'}>
                <div className={'labels__item labels__item_inbox'}>
                    <div className={'labels__item-icon'}>

                    </div>
                    <div className={'labels__item-text'}>
                        Personal
                    </div>
                    <div className={'labels__item-count'}>

                    </div>
                </div>
                <div className={'labels__item labels__item_inbox'}>
                    <div className={'labels__item-icon'}>

                    </div>
                    <div className={'labels__item-text'}>
                        Clients
                    </div>
                    <div className={'labels__item-count'}>

                    </div>
                </div>
                <div className={'labels__item labels__item_inbox'}>
                    <div className={'labels__item-icon'}>

                    </div>
                    <div className={'labels__item-text'}>
                        Work
                    </div>
                    <div className={'labels__item-count'}>

                    </div>
                </div>
                <div className={'labels__item labels__item_inbox'}>
                    <div className={'labels__item-icon'}>

                    </div>
                    <div className={'labels__item-text'}>
                        Friends
                    </div>
                    <div className={'labels__item-count'}>

                    </div>
                </div>
            </div>
        </div>
    )
}