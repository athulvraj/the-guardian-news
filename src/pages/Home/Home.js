import { useNavigate } from 'react-router-dom';
import './Home.scss';
import Badge from '../../components/Badge/Badge';
import StoryCard from '../../components/StoryCard/StoryCard';
const Home = (props) => {
    let cards = [{
        size: 'xl',
        title: 'Lorum Ipsum umIpsum Lorum Ipsum',
        imgSrc: undefined,
        body: 'LorumIpsum Lorum Ipsum umIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum Ipsum'
    }, {
        size: 'xl',
        title: 'Lorum Ipsum umIpsum Lorum Ipsum',
        imgSrc: undefined,
        body: 'LorumIpsum Lorum Ipsum umIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum Ipsum'
    }, {
        size: 'xl',
        title: 'Lorum Ipsum umIpsum Lorum Ipsum',
        imgSrc: undefined,
        body: 'LorumIpsum Lorum Ipsum umIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum Ipsum'
    }, {
        size: 'xl',
        title: 'Lorum Ipsum umIpsum Lorum Ipsum',
        imgSrc: undefined,
        body: 'LorumIpsum Lorum Ipsum umIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum Ipsum'
    }, {
        size: 'xl',
        title: 'Lorum Ipsum umIpsum Lorum Ipsum',
        imgSrc: undefined,
        body: 'LorumIpsum Lorum Ipsum umIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum Ipsum'
    }, {
        size: 'xl',
        title: 'Lorum Ipsum umIpsum Lorum Ipsum',
        imgSrc: undefined,
        body: 'LorumIpsum Lorum Ipsum umIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum IpsumumIpsum Lorum Ipsum'
    },]
    const navigate = useNavigate();
    return (
        <section className='home'>
            <section>
                <Badge buttonText='VIEW BOOKMARK'
                    onButtonClick={()=>navigate('/bookmarks')}
                    onSelectFilterCallback={(e) => console.log(e)}
                    title='Top Stories'
                />
                {cards.map((card, i) => (
                    <StoryCard key={card + i}
                        size={card.size}
                        title={card.title}
                        imgSrc={card.imgSrc}
                        body={card.body}
                    >x</StoryCard>
                ))}
            </section>


        </section>
    );
}

export default Home;