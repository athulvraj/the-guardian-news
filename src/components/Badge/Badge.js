import './Badge.scss';
import { useState } from 'react';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
const Badge = ({ title, buttonText, onSelectFilterCallback, defaultFilterVal = 'newest', onButtonClick }) => {
    let [orderByFilter, setOrderByFilter] = useState(defaultFilterVal);
    const onSelect = (e) => {
        let val = e.target.value;
        setOrderByFilter(val);
        onSelectFilterCallback(val);
    }
    return (
        <div className='title-bar'>
            <h1 className='top-stories-title'>{title}</h1>
            <div className='filter-btn-wrapper'>
                {buttonText &&
                    <BookmarkButton onClick={onButtonClick}>{buttonText}</BookmarkButton>
                }
                <div className='story-filter' >
                    <select onChange={onSelect} value={orderByFilter}>
                        <option value='newest'>Newest First</option>
                        <option value='oldest'>Oldest First</option>
                        <option value='relevance'>Most Popular</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Badge;