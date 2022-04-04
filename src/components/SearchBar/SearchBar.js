import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.scss';
import { useDispatch } from 'react-redux';
import { searchStories } from '../../actions/HomeAction';
import { useNavigate, useLocation } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce'
const SearchBar = () => {
    let [showSearch, setShowSearch] = useState(false);
    let [searchKey, setSearchKey] = useState(null);
    const debouncedSearchTerm = useDebounce(searchKey, 750);
    let searchBoxRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const onSearchBtnClick = (e) => {
        setShowSearch(true);
        if (showSearch) {
            console.log(searchKey);
        }
    }

    const onSearchInputChange = (e) => {
        let value = e.target.value;
        setSearchKey(value);
        if (value === '') {
            setShowSearch(false);
            navigate('/home');
        }
    }

    const handleClickOutside = (e) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
            setShowSearch(false);
        }
    };

    useEffect(() => {
        if (showSearch) {
            document.addEventListener('mousedown', handleClickOutside);
        }
    }, [showSearch]);

    useEffect(() => {
        if (debouncedSearchTerm && (location.pathname === '/home' || location.pathname === '/')) {
            dispatch(searchStories({ orderBy: 'newest', pageSize: 10, q: debouncedSearchTerm, navigate }));
        }
    }, [debouncedSearchTerm, dispatch, navigate, location.pathname]);

    return (
        <div className='search-bar' >
            <div className={`search-enabled ${showSearch ? 'search-bg' : ''}`} onClick={onSearchBtnClick}>
                {showSearch &&
                    <input ref={searchBoxRef}
                        value={searchKey}
                        onChange={onSearchInputChange}
                        placeholder='Search all news'
                        type='search' />
                }
                <button></button>
            </div>
        </div>
    )
};
export default SearchBar;