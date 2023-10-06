const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE'
const SET_TOTAL_PAGES = 'SET-TOTAL-PAGES';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const CHANGE_NUMBER_OF_LAST_USER = 'CHANGE-NUMBER-OF-LAST-USER';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    totalPages: 0,
    totalUsersCount: 0,
    numberOfTheLastShowenUser: 5,
    pageSize: 5,
    page: 1,
    isFetching: false,
    followingInProgress: []
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, 
                totalUsersCount: action.totalUsersCount
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }
        case TOGGLE_IS_FETCHING:
            return {
                 ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                 ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }
        case CHANGE_NUMBER_OF_LAST_USER:
            return {
                ...state,
                numberOfTheLastShowenUser: Math.ceil(action.pageSize * action.currentPage)
            }
        default:
            return {
                ...state
            }
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        users: users
    }
}
export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page: page
    }
}
export function follow(userID) {
    return {
        type: FOLLOW,
        id: userID
    }
}
export function unfollow(userID) {
    return {
        type: UNFOLLOW,
        id: userID
    }
}
export function setTotalPages(totalPages) {
    return {
        type: SET_TOTAL_PAGES,
        totalPages: totalPages
    }
}
export function setTotalUsersCount(totalUsersCount) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}
export function changeNumberOfLastUser(pageSize, currentPage) {
    return {
        type: CHANGE_NUMBER_OF_LAST_USER,
        pageSize: pageSize,
        currentPage: currentPage
    }
}
export function setPageSize(pageSize) {
    return {
        type: SET_PAGE_SIZE,
        pageSize: pageSize
    }
}
export function toggleIsFetching(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export function toggleFollowingProgress(isFetching, id) {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        id: id
    }
}

export default userReducer;