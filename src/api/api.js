import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "94040af5-bef1-40a6-99dd-b81e9618fdbc"
    }
});

export const UsersAPI = {
    getUsers(page = 1, pageSize = 5) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data);
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    isAuth() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}
