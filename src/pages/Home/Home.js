import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHomeStories } from './../../actions/HomeAction';
import './Home.scss';
import Badge from '../../components/Badge/Badge';
import { getFormattedPosts } from '../../services/StoryService';
/*********** Sections********* */
import TopStories from './TopStories';
import Stories from '../../components/Stories/Stories';

const Home = () => {
    let [stories, setStories] = useState({});
    let [searchMode, setSearchMode] = useState(false);
    let [searchKey, setSearchKey] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const selector = useSelector(state => state);
    let _stories = selector.stories;
    let searchStories = selector.searchStories;

    useEffect(() => {
        let urlSearchParams = new URLSearchParams(location.search);
        let key = urlSearchParams.get('search');
        if (key?.length > 0) {
            setSearchMode(true);
            setSearchKey(key);
        } else {
            setSearchMode(false);
            dispatch(loadHomeStories());
            setSearchMode(false);
            setSearchKey('');
        }
    }, [dispatch, searchMode, searchKey, location.search]);

    useEffect(() => {
        setStories(_stories);
    }, [_stories]);

    const onSelectFilterCallback = (orderBy) => {
        dispatch(searchMode ? loadHomeStories({ orderBy }) : loadHomeStories({ orderBy }));
    }

    return (
        <section className='home'>
            <section>
                <Badge buttonText='VIEW BOOKMARK'
                    onButtonClick={() => navigate('/bookmarks')}
                    onSelectFilterCallback={onSelectFilterCallback}
                    title={searchMode ? 'Search Result' : 'Top Stories'}
                />
                {searchMode ?
                <Stories stories={getFormattedPosts(searchStories, 'l')} />
                   :
                    <>
                        <TopStories stories={getFormattedPosts(stories.top)} />
                        <Stories stories={getFormattedPosts(stories.sport, 'l')} title='Sports' />
                        <a className='viewMoreLink'  href='/sports' onClick={()=>{}}>View More</a>
                        <Stories stories={getFormattedPosts(stories.culture, 'l')} title='Culture' />
                        <a className='viewMoreLink'  href='/culture' onClick={()=>{}}>View More</a>
                        <Stories stories={getFormattedPosts(stories.lifeandstyle, 'l')} title='Life and Style' />
                        <a className='viewMoreLink'  href='/lifeandstyle' onClick={()=>{}}>View More</a>
                    </>
                }
            </section>
        </section>
    );
}

export default Home;