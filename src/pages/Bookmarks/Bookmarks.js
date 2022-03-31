import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchStory } from '../../actions/HomeAction';
import './Bookmarks.scss';

const Bookmarks = () => {
    let [searchResults, setSearchResults] = useState({});
    let [searchKey, setSearchKey] = useState({});
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    let articles = selector.articles;
    useEffect(() => {
        let urlSearchParams = new URLSearchParams(window.location.search);
        let searchKey = urlSearchParams.get('key');
        setSearchKey(searchKey);
        searchStory.then(results=>{
            console.log(results);
        })

    }, [searchKey]);

    useEffect(() => {
        
    }, [articles]);

    return (
        <section className='home article'>
            <section>
                
            </section>
        </section>
    );
}

export default Bookmarks;