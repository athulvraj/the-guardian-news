import StoryCard from '../../components/StoryCard/StoryCard';
const TopStories = (props) => {
    let topStories = [...props.stories];
    return (
        topStories.length > 0 &&
        <section className='top-stories'>
            <div className='display-flex flex-wrap'>
                <StoryCard {...topStories[0]} />
                <div className='display-flex-column'>
                    <StoryCard {...topStories[1]} />
                    <StoryCard {...topStories[3]} />
                </div >
                <div className='display-flex-column'>
                    <StoryCard {...topStories[2]} />
                    <StoryCard {...topStories[4]} />
                </div>
            </div>
            <div className='display-flex flex-wrap justify-content-space-between'>
                <StoryCard {...topStories[5]} />
                <StoryCard {...topStories[6]} />
                <StoryCard {...topStories[7]} />
            </div>
        </section>
    );
}

export default TopStories;