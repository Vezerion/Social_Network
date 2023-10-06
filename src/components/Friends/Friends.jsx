import User from './User'
function Friends(props) {
    let pages = [];
        for (let i = props.page - 5; i <= props.page + 5; i++) {
            if (i > 0 && i <= props.totalPages) {
                pages.push(i);
            }

        }
        let show = [5, 10, 20, 50, 100];
        return (
            <div className='friends'>
                <div className='friends_counter'>Показывать по:
                    {
                        show.map((count => {
                            return <span key={count} className={`friends_counter_value ${props.pageSize === count ? 'friends_counter_value_active': ''}`} onClick={() => { props.setPageSize(count) }}>{count}</span>
                        }))
                    }
                    </div>
                <div className="friends_pages">
                    <span onClick={() => { props.changePage(1) }} className={`friends_pages_page `}>1</span>
                    <span>...</span>
                    {
                        pages.map((page) => {
                            return <span key={page} onClick={() => { props.changePage(page) }} className={`friends_pages_page ${page === props.page ? 'friends_pages_page_active': ''}`} >{page}</span>
                        })
                    }
                    <span>...</span>
                    <span onClick={() => { props.changePage(props.totalPages) }} className={`friends_pages_page `}>{props.totalPages}</span>
                </div>

                {
                    props.friends.map(user => {
                        return (
                            <User key={user.id} name={user.name} photos={user.photos} id={user.id} status={user.status} followed={user.followed} follow={props.follow} unfollow={props.unfollow} followingProgress={props.followingProgress} toggleFollowingProgress={props.toggleFollowingProgress}/>
                        )
                    })
                }
            </div>
        )
}

export default Friends;