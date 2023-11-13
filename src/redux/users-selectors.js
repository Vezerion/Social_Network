export function getFriends(state) {
    return state.friendsPage.users
}
export function getPage(state) {
    return state.friendsPage.page
}
export function getPageSize(state) {
    return state.friendsPage.pageSize
}
export function getTotalPages(state) {
    return state.friendsPage.totalPages
}
export function getTotalUsers(state) {
    return state.friendsPage.totalUsersCount
}
export function getIsFetching(state) {
    return state.friendsPage.isFetching
}
export function getNumberOfLastUser(state) {
    return state.friendsPage.numberOfTheLastShowenUser
}
export function getFollowingProgress(state) {
    return state.friendsPage.followingInProgress
}