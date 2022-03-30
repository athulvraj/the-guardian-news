import './StoryCard.scss';


const StoryCard = ({ size = 'l', title, imgSrc, body }) => (
    <article className={`story-card story-card-${size}`}>
        {(imgSrc && size !=='s') &&
            <img className={`story-card-img-${size}`} src={imgSrc} />

        }
        <div className='story-card-content'>
        {title &&
            <div className='story-card-title' >{title}
            </div>
        }
        {(body && size==='l' || size ==='xl') &&
            <div className='story-card-body' >{body}
            </div>
        }

</div>
    </article>
);

export default StoryCard;