import './SocialCard.css';
import Location from './Location';
import PhoneNumber from './PhoneNumber';

const SocialCard = ({ userData }) => {
    return (
    <div className="card">
        <div className="card_title">{userData.name.title}. {userData.name.first} , {userData.name.last}</div>
        <div className="card_body">
            <Location location={userData.location} />
                        <PhoneNumber type='Phone' number={userData.phone} />
            <PhoneNumber type='Cell' number={userData.cell} />
            <div className="card_image"><img src={userData.picture.medium} alt="user"/></div>

        </div>
    </div>
    );
};

export default SocialCard;