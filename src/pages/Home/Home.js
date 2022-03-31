import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHomeStories /* , loadArticle */} from './../../actions/HomeAction';
import './Home.scss';
import Badge from '../../components/Badge/Badge';
/*********** Sections********* */
import TopStories from './TopStories';
import SportsStories from './SportsStories';
import CultureStories from './CultureStories';
import LifeAndStyleStories from './LifeAndStyleStories';
//import thumbnail from '../../assets/Peaks Card Bg.png';

const Home = () => {
    let [stories, setStories] = useState({});
    let [searchMode, setSearchMode] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    let _stories = selector.stories;
    //let articles = selector.articles;
    useEffect(() => {
        dispatch(loadHomeStories());
    }, [dispatch]);

    const onStoryClick = (id) => {
        navigate('/article?id='+id);
    }
    const getFormattedPosts = (data = [], size) => {
        return data.map((item, i) => {
            let sizeArr = ['xl', 'm', 'm', 's', 's', 'l', 'l', 'l'];
            return ({
                size: size || sizeArr[i],
                title: item.webTitle,
                imgSrc: item?.fields?.thumbnail/*  || thumbnail*/,
                body: item?.fields?.trailText,
                url: item.webUrl,
                id: item.id,
                onClick: onStoryClick
            })
        })
    }
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
                    <TopStories stories={getFormattedPosts(stories.top)} /> :
                    <>
                        <TopStories stories={getFormattedPosts(stories.top)} />
                        <SportsStories stories={getFormattedPosts(stories.sport, 'l')} />
                        <CultureStories stories={getFormattedPosts(stories.culture, 'l')} />
                        <LifeAndStyleStories stories={getFormattedPosts(stories.lifeandstyle, 'l')} />
                    </>
                }
            </section>
        </section>
    );
}

export default Home;