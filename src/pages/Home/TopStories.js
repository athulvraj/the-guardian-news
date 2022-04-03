import StoryCard from '../../components/StoryCard/StoryCard';
const TopStories = (props) => {
    let topStories = [...props.stories];
    return (
        topStories.length > 0 &&
        <section className='top-stories'>
            <div className='row-1'>
                <StoryCard {...topStories[0]} />
                <div className='row-1-col-2'>
                    <StoryCard {...topStories[1]} />
                    <StoryCard {...topStories[3]} />
                </div >
                <div className='row-1-col-3'>
                    <StoryCard {...topStories[2]} />
                    <StoryCard {...topStories[4]} />
                </div>
            </div>
            <div className='row-2' >
                <StoryCard {...topStories[5]} />
                <StoryCard {...topStories[6]} />
                <StoryCard {...topStories[7]} />
            </div>
        </section>
    );
}

export default TopStories;