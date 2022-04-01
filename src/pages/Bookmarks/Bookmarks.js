import { useEffect, useState } from 'react';
import './Bookmarks.scss';
import { retriveFromStorage } from '../../services/StorageUtils';
import Stories from '../../components/Stories/Stories';
const Bookmarks = () => {
    let [bookmarks, setBookmarks] = useState([]);
   
    
    useEffect(() => {
        let bookmarksObj = retriveFromStorage('bookmarks');        
        setBookmarks(Object.values(bookmarksObj));
    }, []);

    useEffect(() => {
        
    }, [bookmarks]);

    return (
        <section className='home article'>
             <h1>All Bookmarks</h1>
            <section>
               {bookmarks.length>0 ?
               <Stories stories={bookmarks}></Stories> :
               <div>No Bookmarks added yet</div>
               }
                
            </section>
        </section>
    );
}

export default Bookmarks;