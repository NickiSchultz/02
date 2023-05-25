const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    newMessageBody: "1"
};

export const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };

        case SEND_MESSAGE:
            let body1 = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messData: [...state.messData, { id: 6, message: body1 }]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });