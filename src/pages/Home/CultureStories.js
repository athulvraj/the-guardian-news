import StoryCard from '../../components/StoryCard/StoryCard';
const CultureStories = (props) => {
    let stories = [...props.stories];
    return (
        stories.length > 0 &&
        <section className='culture-stories'>
            <h2>Culture</h2>
            <div className='display-flex flex-wrap justify-content-space-between'>
                {stories.map((story, i) => (
                    <StoryCard {...story} />
                ))
                }
            </div>
        </section>
    );
}

export default CultureStories;