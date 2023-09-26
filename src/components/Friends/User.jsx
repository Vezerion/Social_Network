
function User(props) {
    const follow = (e) => {
        let userid = +e.target.parentElement.id;
        props.follow(userid)
    }
    const unfollow = (e) => {
        let userid = +e.target.parentElement.id;
        props.unfollow(userid)
    }
    if(props.followed === true) {
        return (
            <div id={props.id}>
                <div>{props.fullname}</div>
                <div>{props.status}</div>
                <button onClick={unfollow}>unfollow</button>
                <hr></hr>
            </div>
        )
    } else {
        return (
            <div id={props.id}>
                <div>{props.fullname}</div>
                <div>{props.status}</div>
                <button onClick={follow}>follow</button>
                <hr></hr>
            </div>
        )
    }
    
}

export default User;