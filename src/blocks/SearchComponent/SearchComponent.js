import './SearchComponent.scss';

export default function SearchComponent() {

    return (
        <div className={'search-component'}>
            <form className={'search-component__form'}
                  action={''}>
                <input type="text"
                       className={'search-component__input'}
                       placeholder={'Search'} />
            </form>
        </div>
    )
}