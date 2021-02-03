import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "619b1ce3-a907-4252-bd76-a690bdde4068",
  },
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  subscribeMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId = 2) {
    console.warn("Obsolete method. Please use profileAPi object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId = 2) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId = 2) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const followAPI = {
  unfollow(id = 1) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  follow(id = 1) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};
