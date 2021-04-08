import './Lists.scss';

export default function Lists() {
//    TODO: соцалку захардкодить или хранить где-то знание об этом?
    return (
        <div className={'lists'}>
            <div className={'lists__header'}>
                Lists
            </div>
            <div className={'lists__items'}>
                <div className={'lists__item'}>
                    Linkedin
                </div>
            </div>
        </div>
    )
}