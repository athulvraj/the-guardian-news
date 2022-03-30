import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => (
    <header className='header'>
        <a className='logo' href='/home'>
            The Peaks
        </a>
        <SearchBar />
    </header>
);

export default Header;