import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation_item navigation_profile">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faUser} />
                <span className='navigation_item_name'>Profile</span>
                
            </div>
            <div className="navigation_item navigation_messages">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faMessage} />
                <span className='navigation_item_name'>Messages</span>
                
            </div>
            <div className="navigation_item navigation_news">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faNewspaper} />
                <span className='navigation_item_name'>News</span>
                
            </div>
            <div className="navigation_item navigation_music">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faCirclePlay} />
                <span className='navigation_item_name'>Music</span>
                </div>
            <div className="navigation_item navigation_settings">
                <FontAwesomeIcon className ='navigation_item_icon' icon={faGear} />
                <span className='navigation_item_name'>Settings</span>
                </div>
        </nav>
    );
}

export default Navigation;