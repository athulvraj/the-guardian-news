import './StoryCard.scss';
import { useState } from 'react';
import thumbnail from '../../assets/Peaks Card Bg.png';

const StoryCard = ({ size = 'l', title, imgSrc = thumbnail, body, onClick, id }) => {
    let [imageLoaded, setImageLoaded] = useState(false);
    const isImageLoaded = () => {
        setImageLoaded(true);
    }
    return (
        <article className={`story-card story-card-${size}`} onClick={() => onClick(id)}>
            {(!imageLoaded && size !== 's') &&
                <img className={`story-card-img-${size}`} src={thumbnail} alt='thumbnail' />
            }
            {(imgSrc && size !== 's') &&
                <img className={`story-card-img-${size} ${isImageLoaded ? '' : 'displayNone'}`} src={imgSrc} alt='thumbnail' onLoad={isImageLoaded} />
            }
            <div className='story-card-content'>
                {title &&
                    <div className='story-card-title' >{title}
                    </div>
                }
                {(body && (size === 'l' || size === 'xl')) &&
                    <div className='story-card-body' >{body}
                    </div>
                }
            </div>
        </article>

    );
}

export default StoryCard;