import User from './User'
import axios from 'axios';
import React from 'react';

class Friends extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(data => {
                console.log(data.data.items);
                this.props.setUsers(data.data.items);
            });
    }
    render() {
        return (
            <div className='friends'>
                {
                this.props.friends.map(user=> {
                    return (
                        <User key={user.id} name={user.name} photos={user.photos} id={user.id} status={user.status} followed={user.followed} follow={this.props.follow} unfollow={this.props.unfollow}/>
                    )
                })
                }
                </div>
        )
}
}
export default Friends;