import NewMessageButton from "../NewMessageButton/NewMessageButton";
import MailBox from "../MailBox/MailBox";
import Lists from "../Lists/Lists";
import Labels from "../Labels/Labels";

import './Navigation.scss';

export default function Navigation() {
    return (
        <div className={'navigation'}>
            <NewMessageButton />
            <MailBox />
            <Lists />
            <Labels />
        </div>
    )
}