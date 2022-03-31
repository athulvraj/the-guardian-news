import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.scss';
import { useDispatch} from 'react-redux';
import { searchStories } from '../../actions/HomeAction';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    let [showSearch, setShowSearch] = useState(false);
    let [searchKey, setSearchKey] = useState('');
    let searchBoxRef = useRef(null);
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const onSearchBtnClick = (e) => {
        setShowSearch(true);
        if (showSearch) {
            console.log(searchKey);
        }
    }
    //TODO:: Implement Debouncing search
    const onSearchInputChange = (e) => {
        let value = e.target.value;
        setSearchKey(value);
        if (value === '') {
            setShowSearch(false)
        }
        dispatch(searchStories({ orderBy :'newest', pageSize:10, q:value , navigate}))
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