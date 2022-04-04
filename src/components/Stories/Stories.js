import './Stories.scss';
import StoryCard from '../StoryCard/StoryCard';

const Stories = (props) => {
    let stories = [...props.stories];
    return (
        stories.length > 0 &&
        <section className='stories'>
            {props.title &&
                <h2>{props.title}</h2>
            }
            <div className='story'>
                {stories.map((story, i) => (
                    <StoryCard {...story} key={story.id + String(i)} />
                ))
                }
            </div>
        </section>
    );
}

export default Stories;