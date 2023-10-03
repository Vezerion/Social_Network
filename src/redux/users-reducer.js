const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE'
const SET_TOTAL_PAGES = 'SET-TOTAL-PAGES';
const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [],
    totalPages: 0,
    pageSize: 5,
    page: 1,
    isFetching: false
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
            return { ...state, isFetching: action.isFetching}
        default:
            return {
                ...state
            }
    }
}

export function setUsersAC(users) {
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
export function followAC(userID) {
    return {
        type: FOLLOW,
        id: userID
    }
}
export function unfollowAC(userID) {
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
export function setPageSize(pageSize) {
    return {
        type: SET_PAGE_SIZE,
        pageSize: pageSize
    }
}
export function toggleIsFetchingAC(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export default userReducer;