import './Badge.scss';

const Badge = ({ title, buttonText, onSelectFilterCallback, defaultFilterVal = '1', onButtonClick }) => {
    const onSelect = (e) => {
        let val = e.target.value;
        onSelectFilterCallback(val);
    }
    return (
        <div className='title-bar'>
            <h1 className='top-stories-title'>{title}</h1>
            <div className='filter-btn-wrapper'>
                {buttonText &&
                    <button className='bookmark-btn' onClick={onButtonClick}>{buttonText}</button>
                }
                <div className='story-filter' >
                    <select onChange={onSelect} value={defaultFilterVal}>
                        <option value='0'></option>
                        <option value='1'>Newest First</option>
                        <option value='2'>Oldest First</option>
                        <option value='3'>Most Popular</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Badge;