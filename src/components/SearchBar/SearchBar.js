import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    let [showSearch, setShowSearch] = useState(false);
    let [searchKey, setSearchKey] = useState('');
    let searchBoxRef = useRef(null);
    const onSearchBtnClick = (e) => {
        setShowSearch(true);
        if (showSearch) {
            console.log(searchKey);
        }
    }
    const onSearchInputChange = (e) => {
        setSearchKey(e.target.value);
        if (e.target.value === '') {
            setShowSearch(false)
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