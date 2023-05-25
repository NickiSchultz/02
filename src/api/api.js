import axios from "axios";

const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7c13255d-f8ac-4119-ab2f-85294618dc92"
    }
});

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId){
        console.warn('Use method ProfileAPI')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },

    getStatus(userId){
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status){
        return instance.put('profile/status', {status: status});
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


