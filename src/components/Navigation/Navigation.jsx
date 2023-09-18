import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation_item navigation_profile">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faUser} />
                <NavLink to="/profile" className='navigation_item_name'>Profile</NavLink>
            </div>
            <div className="navigation_item navigation_messages">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faMessage} />
                <NavLink to="/messages" className='navigation_item_name'>Messages</NavLink> 
            </div>
            <div className="navigation_item navigation_news">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faNewspaper} />
                <NavLink to="/news" className='navigation_item_name'>News</NavLink>
            </div>
            <div className="navigation_item navigation_music">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faCirclePlay} />
                <NavLink to="/music" className='navigation_item_name'>Music</NavLink>
                </div>
            <div className="navigation_item navigation_settings">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faGear} />
                <NavLink to="/settings" className='navigation_item_name'>Settings</NavLink>
                </div>
        </nav>
    );
}

export default Navigation;