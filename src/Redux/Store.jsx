import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, postFile: 'Hi, how are you?', likecount: '7', commcount: '3' },
                { id: 2, postFile: ' ', likecount: '0', commcount: '0' },
                { id: 3, postFile: ' ', likecount: '0', commcount: '0' },
                { id: 4, postFile: ' ', likecount: '0', commcount: '0' },
                { id: 5, postFile: 'It`s my first post', likecount: '12', commcount: '6' }
            ],
            newPostText: "textdgbvsrgbcs",
        },

        messPage: {
            dialData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andre' },
                { id: 3, name: 'Nika' },
                { id: 4, name: 'Famos' },
                { id: 5, name: 'Nick' }
            ],

            messData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            newMessageBody: "1",
        },

        sideBar: {
            friends: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andre' },
                { id: 3, name: 'Cat' }]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state is changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messPage = dialogsReducer(this._state.messPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);

    }
};


export default store;