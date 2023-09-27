import User from './User'

import axios from 'axios';
function Friends(props) {
    const getUsers = () => {
        if(props.friends.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(data => {
                console.log(data.data.items);
                props.setUsers(data.data.items);
            });
            
        }
    }
    
    return (
        <div className='friends'>
            <button onClick={getUsers}>Get Users</button>
            {
            props.friends.map(user=> {
                return (
                    <User key={user.id} name={user.name} photos={user.photos} id={user.id} status={user.status} followed={user.followed} follow={props.follow} unfollow={props.unfollow}/>
                )
            })
            }
            </div>
    )
}

export default Friends;