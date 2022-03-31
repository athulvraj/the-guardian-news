import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticle } from './../../actions/HomeAction';
import BookmarkButton from '../../components/BookmarkButton/BookmarkButton';
import './Article.scss';

const Home = () => {
    let [article, setArticle] = useState({});
    let [id, setId] = useState({});
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    let articles = selector.articles;
    useEffect(() => {
        let urlSearchParams = new URLSearchParams(window.location.search);
        let id = urlSearchParams.get('id');
        setId(id);
        dispatch(loadArticle(id));

    }, [dispatch]);

    const onBookmark = (id) => {
        //dispatch(loadArticle (id));
    }

    useEffect(() => {
        setArticle(articles[id]);
    }, [articles]);

    return (
        <section className='home article'>
            <section>
                <BookmarkButton onClick={onBookmark} >Add Bookmark</BookmarkButton>
                <div>{article?.webPublicationDate}</div>
                <h1>{article?.webTitle}</h1>
                <strong>{article?.trailText}</strong>
                <div dangerouslySetInnerHTML={{ __html: article?.fields?.body }}></div>
            </section>
        </section>
    );
}

export default Home;