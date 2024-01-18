const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    // users: [
    //     {
    //         id: 1,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: false,
    //         fullName: "Vovanec",
    //         status: "Im a boss",
    //         location: { city: "Minsk", country: "Belarus" },
    //     },
    //     {
    //         id: 2,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: true,
    //         fullName: "Svetlana",
    //         status: "Im a boss 1",
    //         location: { city: "Khaifa", country: "Israel" },
    //     },
    //     {
    //         id: 3,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: false,
    //         fullName: "Timka",
    //         status: "Im a boss 2",
    //         location: { city: "Kharkov", country: "Ukraine" },
    //     },
    //     {
    //         id: 4,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: false,
    //         fullName: "Beta",
    //         status: "Im a boss 3",
    //         location: { city: "Novodruzesk", country: "Ukraine" },
    //     },
    //     {
    //         id: 5,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: true,
    //         fullName: "Alfa",
    //         status: "Im a boss 3",
    //         location: { city: "Novodruzesk", country: "Ukraine" },
    //     },
    //     {
    //         id: 6,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: true,
    //         fullName: "Mikki",
    //         status: "Im a boss 3",
    //         location: { city: "Bondarevka", country: "Ukraine" },
    //     },
    //     {
    //         id: 7,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: false,
    //         fullName: "Madlena",
    //         status: "Im a boss 3",
    //         location: { city: "Yevpatoria", country: "Ukraine" },
    //     },
    //     {
    //         id: 8,
    //         photoUrl:
    //             "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
    //         followed: true,
    //         fullName: "Alica",
    //         status: "Im a boss 3",
    //         location: { city: "Sakhnovschina", country: "Ukraine" },
    //     },
    // ],
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            // let stateCopy = { ...state, users: [...state.users] };
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }
        default:
            return state;
    }
};

// action creators
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId,
});
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users,
});

export default usersReducer;
