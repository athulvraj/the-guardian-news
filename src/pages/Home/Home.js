import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopStories } from './../../actions/HomeAction';
import './Home.scss';
import Badge from '../../components/Badge/Badge';
/*********** Sections********* */
import TopStories from './TopStories';
import SportsStories from './SportsStories';
import CultureStories from './CultureStories';
import LifeAndStyleStories from './LifeAndStyleStories';
//import thumbnail from '../../assets/Peaks Card Bg.png';


const Home = () => {
    let [topStories, setTopStories] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    let posts = selector.posts;
    useEffect(() => {
        dispatch(loadTopStories());
    }, [dispatch]);

    const getFormattedPosts = (data) => {
        return data.map((item, i) => {
            let sizeArr = ['xl', 'm', 'm', 's', 's', 'l', 'l', 'l'];
            return ({
                size: sizeArr[i],
                title: item.webTitle,
                imgSrc: item?.fields?.thumbnail/*  || thumbnail*/, 
                body: item?.fields?.trailText,
                url: item.webUrl
            })
        })
    }
    useEffect(() => {
        setTopStories(getFormattedPosts(posts));

    }, [posts])
    const onSelectFilterCallback = (orderBy) => {
        dispatch(loadTopStories({orderBy }));
    }
    return (
        <section className='home'>
            <section>
                <Badge buttonText='VIEW BOOKMARK'
                    onButtonClick={() => navigate('/bookmarks')}
                    onSelectFilterCallback={onSelectFilterCallback}
                    title='Top Stories'
                />
                <TopStories stories={topStories}/>
                <SportsStories stories={topStories}/>
                <CultureStories stories={topStories}/>
                <LifeAndStyleStories stories={topStories}/>
            </section>


        </section>
    );
}

export default Home;