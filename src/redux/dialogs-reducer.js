const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Vovanec",
        },
        {
            id: 2,
            name: "Svetlana",
        },
        {
            id: 3,
            name: "Timka",
        },
        {
            id: 4,
            name: "Beta",
        },
        {
            id: 5,
            name: "Alfa",
        },
        {
            id: 6,
            name: "Mikki",
        },
        {
            id: 7,
            name: "Madlena",
        },
        {
            id: 8,
            name: "Alica",
        },
    ],
    messages: [
        {
            id: 1,
            message: "Hi",
        },
        {
            id: 2,
            message: "Hello",
        },
        {
            id: 3,
            message: "How are you?",
        },
        {
            id: 4,
            message: "Yo-yo-yo",
        },
        {
            id: 5,
            message: "I will back",
        },
        {
            id: 6,
            message: "Astalavista Baby",
        },
        {
            id: 7,
            name: "How old are you",
        },
        {
            id: 8,
            message: "What is your favorite book?",
        },
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy = { ...state, messages: [...state.messages] };
    // stateCopy.messages = [...state.messages];
    // let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.body };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [
                    ...state.messages,
                    {
                        id: 9,
                        message: body,
                    },
                ],
            };
        default:
            return state;
    }
    // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body;
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = "";
    //     state.messages.push({
    //         id: 9,
    //         message: body,
    //     });
    // }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReducer;
