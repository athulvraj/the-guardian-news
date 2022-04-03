import { useEffect, useState } from 'react';
import Stories from '../../components/Stories/Stories';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loadStories} from '../../actions/HomeAction';
import Badge from '../../components/Badge/Badge';
import { getFormattedPosts } from '../../services/StoryService';
const SectionStory = ({title, section}) => {
    let [tiles, setTiles] = useState([]);
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    let sectionStories = selector.stories[section];
    useEffect(() => {
       if(sectionStories.length<4){
            dispatch(loadStories({orderBy:'newest', pageSize:15, section}));
       }else{
           setTiles(sectionStories)
       }
    }, [sectionStories]);
    const onSelectFilterCallback = (orderBy) => {
        dispatch(loadStories({orderBy, pageSize:10, section}))
    }

    return (
        <section className='home article'>
            <Badge buttonText='VIEW BOOKMARK'
                    onButtonClick={() => navigate('/bookmarks')}
                    onSelectFilterCallback={onSelectFilterCallback}
                    title={title}
                />
            <section>
               {tiles.length>0 ?
               <Stories stories={getFormattedPosts(tiles, 'l')}></Stories> :
               <div>No Stories Loaded</div>
               }
                
            </section>
        </section>
    );
}

export default SectionStory;