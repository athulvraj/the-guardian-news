import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopStories } from './../../actions/HomeAction';
import './Home.scss';
import Badge from '../../components/Badge/Badge';
import StoryCard from '../../components/StoryCard/StoryCard';
const Home = (props) => {
    let [topStories, setTopStories] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    let posts = selector.posts;
    useEffect(() => {
        dispatch(loadTopStories());
    }, [])
    const getFormattedPosts = (data) => {
        return data.map((item, i) => {
            let sizeArr = ['xl', 'm', 'm', 's', 's', 'l', 'l', 'l'];
            return ({
                size: sizeArr[i],
                title: item.webTitle,
                imgSrc: item?.fields?.thumbnail,
                body: item?.fields?.trailText,
                url: item.webUrl
            })
        })
    }
    useEffect(() => {
        setTopStories(getFormattedPosts(posts));

    }, [posts])

    return (
        <section className='home'>
            <section>
                <Badge buttonText='VIEW BOOKMARK'
                    onButtonClick={() => navigate('/bookmarks')}
                    onSelectFilterCallback={(e) => console.log(e)}
                    title='Top Stories'
                />
                {topStories.length > 0 &&
                    <div className='top-stories'>

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
                    </div>
                }
            </section>


        </section>
    );
}

export default Home;