import User from './User'
import axios from 'axios';
import React from 'react';

class Friends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
            .then(data => {
                this.props.setUsers(data.data.items);
                this.props.setTotalPages(Math.ceil(data.data.totalCount / this.props.pageSize));
            });
    }
    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page || this.props.pageSize !== prevProps.pageSize) {
            console.log(this.props.page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
                .then(data => {
                    this.props.setUsers(data.data.items);
                    this.props.setTotalPages(Math.ceil(data.data.totalCount / this.props.pageSize));
                });
        }

    }
    render() {
        let pages = [];
        for (let i = this.props.page - 5; i <= this.props.page + 5; i++) {
            if (i > 0 && i <= this.props.totalPages) {
                pages.push(i);
            }

        }
        let show = [5, 10, 20, 50, 100];
        return (
            <div className='friends'>
                <div className='friends_counter'>Показывать по:
                    {
                        show.map((count => {
                            return <span className={`friends_counter_value ${this.props.pageSize === count ? 'friends_counter_value_active': ''}`} onClick={() => { this.props.setPageSize(count) }}>{count}</span>
                        }))
                    }
                    </div>
                <div className="friends_pages">
                    <span onClick={() => { this.props.changePage(1) }} className={`friends_pages_page `}>1</span>
                    <span>...</span>
                    {
                        pages.map((page) => {
                            return <span onClick={() => { this.props.changePage(page) }} className={`friends_pages_page ${page === this.props.page ? 'friends_pages_page_active': ''}`} >{page}</span>
                        })
                    }
                    <span>...</span>
                    <span onClick={() => { this.props.changePage(this.props.totalPages) }} className={`friends_pages_page `}>{this.props.totalPages}</span>
                </div>

                {
                    this.props.friends.map(user => {
                        return (
                            <User key={user.id} name={user.name} photos={user.photos} id={user.id} status={user.status} followed={user.followed} follow={this.props.follow} unfollow={this.props.unfollow} />
                        )
                    })
                }
            </div>
        )
    }
}
export default Friends;