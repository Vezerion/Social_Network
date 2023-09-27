const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
let initialState = {
    users: []
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
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

export default userReducer;