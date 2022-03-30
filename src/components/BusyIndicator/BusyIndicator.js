import image from './BusyIndicator.gif';
import './BusyIndicator.scss';

const BusyIndicator = ({ show }) => (
    show ?
        <div className='busy-indicator'>
            <img src={image} />
        </div>
        :
        null
);
export default BusyIndicator;