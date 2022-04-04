import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticle } from './../../actions/HomeAction';
import BookmarkButton from '../../components/BookmarkButton/BookmarkButton';
import MessageStrip from '../../components/MessageStrip/MessageStrip';
import './Article.scss';
import moment from 'moment';
import { saveToStorage, retriveFromStorage, removeFromStorage } from '../../services/StorageUtils';
import { getFormattedPosts } from '../../services/StoryService';

const Home = () => {
    let [article, setArticle] = useState({});
    let [isBookmarked, setIsBookmarked] = useState(false);
    let [showMessage, setShowMessage] = useState(false);
    let [id, setId] = useState({});
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    let articles = selector.articles;
    useEffect(() => {
        let urlSearchParams = new URLSearchParams(window.location.search);
        let id = urlSearchParams.get('id');
        setId(id);
        dispatch(loadArticle(id));
        let bookmarksObj = retriveFromStorage('bookmarks');
        if (typeof bookmarksObj[id] !== 'undefined') {
            setIsBookmarked(true)
        }
    }, [dispatch]);

    const onBookmark = () => {

        if (isBookmarked) {
            removeFromStorage(id, 'bookmarks')
            setIsBookmarked(false)
        } else {
            let bookmarkStoryCard = getFormattedPosts([article], 'l')[0];
            let bookMArkCard = { [id]: bookmarkStoryCard };
            saveToStorage(bookMArkCard);
            setIsBookmarked(true)
        }
        setShowMessage(true);

    }

    useEffect(() => {
        setArticle(articles[id]);
        window.scrollTo(0,0);
    }, [articles, id]);

    return (
        <>
            <section className='home article'>
                <section>
                    <BookmarkButton onClick={onBookmark} >{isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}</BookmarkButton>
                    <div className='date'>{moment(article?.webPublicationDate).format('llll')}</div>
                    <h1>{article?.webTitle}</h1>
                    <strong>{article?.trailText}</strong>
                    <div dangerouslySetInnerHTML={{ __html: article?.fields?.body }}></div>
                </section>

            </section>
            <MessageStrip message={`${isBookmarked ? 'SAVED TO BOOKMARKS': 'REMOVED FROM BOOKMARKS'}`}
                show={showMessage}
                type={isBookmarked ? 'success' : 'error'} />
        </>
    );
}

export default Home;