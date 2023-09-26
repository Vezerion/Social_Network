import User from './User'
function Friends(props) {
    if(props.friends.length === 0) {
        props.setUsers([{ id: 1, followed: true, fullname: 'Mike', status: 'Lets go' }, { id: 2, followed: false, fullname: 'Niki', status: 'come on' }, { id: 3, followed: false, fullname: 'Jake', status: 'here we go' }]);
    }
    return (
        <div>
            {
            props.friends.map(user=> {
                return (
                    <User key={user.id} fullname={user.fullname} id={user.id} status={user.status} followed={user.followed} follow={props.follow} unfollow={props.unfollow}/>
                )
            })
            }
            </div>
    )
}

export default Friends;