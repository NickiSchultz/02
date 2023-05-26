import { userAPI, profileAPI } from './../api/api'


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        { id: 1, postFile: 'Hi, how are you?', likecount: '7', commcount: '3' },
        { id: 2, postFile: ' ', likecount: '0', commcount: '0' },
        { id: 3, postFile: ' ', likecount: '0', commcount: '0' },
        { id: 4, postFile: ' ', likecount: '0', commcount: '0' },
        { id: 5, postFile: 'It`s my first post', likecount: '12', commcount: '6' }
    ],
    newPostText: 'text of post',
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {

    let body1 = state.newPostText;

    switch (action.type) {
        case ADD_POST:

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 6, postFile: body1, likecount: 0, commcount: 0 }]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.body
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (body) =>
    ({ type: UPDATE_NEW_POST_TEXT, body: body });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};

// export const updateStatus = (status) => (dispatch) => {
//     profileAPI.updateStatus(status) 
//         .then (response => {
//             if (response.data.resultCode === 0){
//             dispatch(setStatus(response.data));
//             }
//         });
// };

// export const getStatus = (userId) => (dispatch) => {
//     profileAPI.getStatus(userId).then( response => {
//         dispatch(setStatus(response.data))
//     })
// }
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}