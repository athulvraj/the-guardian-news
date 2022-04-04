import './StoryCard.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import thumbnail from '../../assets/Peaks Card Bg.png';

const StoryCard = ({ size = 'l', title, imgSrc = thumbnail, body, onClick, id }) => {
    let [imageLoaded, setImageLoaded] = useState(false);
    const isImageLoaded = () => {
        setImageLoaded(true);
    }
    const navigate = useNavigate();
    const getRandomCardColorClassName = () => {
        let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'grey', 'violet'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    return (
        <article className={`story-card story-card-${size} border-bottom-${getRandomCardColorClassName()}`} onClick={() => navigate('/article?id=' + id)}>
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
                    <div className='story-card-body' dangerouslySetInnerHTML={{ __html: body }}></div>
                }
            </div>
        </article>

    );
}

export default StoryCard;