import './StoryCard.scss';


const StoryCard = ({ size = 'm', title, imgSrc, body }) => (
    <article className={`story-card-${size}`}>
        {imgSrc &&
            <img className='story-card-img' src={imgSrc} />

        }
        {title &&
            <div className='story-card-title' >{title}
            </div>
        }
        {body &&
            <div className='story-card-body' >{body}
            </div>
        }
    </article>
);

export default StoryCard;