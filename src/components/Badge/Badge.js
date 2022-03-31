import './Badge.scss';
import { useState } from 'react';

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
                    <button className='bookmark-btn' onClick={onButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                        </svg> {buttonText}</button>
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