import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/peaks logo.png';
const Header = () => (
    <header className='header'>
        <div className='header-wrapper'>
            <a href='/home'>
                <img className='logo-img' src={logo} alt='logo' />
            </a>
            <SearchBar />
        </div>
    </header>
);
//0045b3
export default Header;