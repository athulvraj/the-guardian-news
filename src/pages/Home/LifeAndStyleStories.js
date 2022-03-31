import StoryCard from '../../components/StoryCard/StoryCard';
const LifeAndStyleStories = (props) => {
    let stories = [...props.stories];
    return (
        stories.length > 0 &&
        <section className='lifeandstyle-stories'>
            <h2>Life and Style</h2>
            <div className='display-flex flex-wrap justify-content-space-between'>
                <StoryCard {...stories[5]} />
                <StoryCard {...stories[6]} />
                <StoryCard {...stories[7]} />
            </div>
        </section>
    );
}

export default LifeAndStyleStories;