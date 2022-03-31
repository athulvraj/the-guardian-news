import './StoryCard.scss';
import thumbnail from '../../assets/Peaks Card Bg.png';

const StoryCard = ({ size = 'l', title, imgSrc = thumbnail, body }) => (
    <article className={`story-card story-card-${size}`}>
        {(imgSrc && size !== 's') &&
            <img className={`story-card-img-${size}`} src={imgSrc} alt='thumbnail' />

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

export default StoryCard;