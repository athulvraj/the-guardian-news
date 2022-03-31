import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHomeStories } from './../../actions/HomeAction';
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    let _stories = selector.stories;

    useEffect(() => {
        dispatch(loadHomeStories());
    }, [dispatch]);

    const getFormattedPosts = (data = [], size) => {
        return data.map((item, i) => {
            let sizeArr = ['xl', 'm', 'm', 's', 's', 'l', 'l', 'l'];
            return ({
                size: size || sizeArr[i],
                title: item.webTitle,
                imgSrc: item?.fields?.thumbnail/*  || thumbnail*/,
                body: item?.fields?.trailText,
                url: item.webUrl
            })
        })
    }
    useEffect(() => {
        setStories(_stories);
    }, [_stories]);

    const onSelectFilterCallback = (orderBy) => {
        dispatch(loadHomeStories({ orderBy }));
    }
    
    return (
        <section className='home'>
            <section>
                <Badge buttonText='VIEW BOOKMARK'
                    onButtonClick={() => navigate('/bookmarks')}
                    onSelectFilterCallback={onSelectFilterCallback}
                    title='Top Stories'
                />
                <TopStories stories={getFormattedPosts(stories.top)} />
                <SportsStories stories={getFormattedPosts(stories.sport, 'l')} />
                <CultureStories stories={getFormattedPosts(stories.culture, 'l')} />
                <LifeAndStyleStories stories={getFormattedPosts(stories.lifeandstyle, 'l')} />
            </section>
        </section>
    );
}

export default Home;