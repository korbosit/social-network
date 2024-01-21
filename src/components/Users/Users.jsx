import React from "react";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import instance from "../../redux/api-instance";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span
                            key={p}
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                            className={
                                props.currentPage === p && classes.selectedPage
                            }
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile" + u.id}>
                                <img
                                    src={
                                        u.photos.small != null
                                            ? u.photos.small
                                            : userPhoto
                                    }
                                    className={classes.userPhoto}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        instance
                                            .delete(`/follow/${u.id}`, {
                                                withCredentials: true,
                                            })
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.unfollow(u.id);
                                                }
                                            });
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        instance
                                            .post(
                                                `/follow/${u.id}`,
                                                {},
                                                { withCredentials: true }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.follow(u.id);
                                                }
                                            });
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location?.country}</div>
                            <div>{u.location?.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;

// import React from "react";
// import classes from "./Users.module.css";
// import { NavLink } from "react-router-dom";
// import userPhoto from "../../assets/images/user.png";
// // import instance from "../../redux/api-instance";
// import axios from "axios";

// let Users = (props) => {
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//     return (
//         <div>
//             <div>
//                 {pages.map((p) => {
//                     return (
//                         <span
//                             key={p}
//                             onClick={() => {
//                                 props.onPageChanged(p);
//                             }}
//                             className={
//                                 props.currentPage === p && classes.selectedPage
//                             }
//                         >
//                             {p}
//                         </span>
//                     );
//                 })}
//             </div>
//             {props.users.map((u) => (
//                 <div key={u.id}>
//                     <span>
//                         <div>
//                             <NavLink to={"/profile" + u.id}>
//                                 <img
//                                     src={
//                                         u.photos.small != null
//                                             ? u.photos.small
//                                             : userPhoto
//                                     }
//                                     className={classes.userPhoto}
//                                 />
//                             </NavLink>
//                         </div>
//                         <div>
//                             {u.followed ? (
//                                 <button
//                                     onClick={() => {
//                                         axios
//                                             .delete(`/follow/${u.id}`, {
//                                                 withCredentials: true,
//                                                 headers: {
//                                                     "API-KEY":
//                                                         "e2ce764c-daf0-40f7-af22-472dae522b83",
//                                                 },
//                                             })
//                                             .then((response) => {
//                                                 if (
//                                                     response.data.resultCode ===
//                                                     0
//                                                 ) {
//                                                     props.unfollow(u.id);
//                                                 }
//                                             });
//                                     }}
//                                 >
//                                     Unfollow
//                                 </button>
//                             ) : (
//                                 <button
//                                     onClick={() => {
//                                         axios
//                                             .post(
//                                                 `/follow/${u.id}`,
//                                                 {},
//                                                 {
//                                                     withCredentials: true,
//                                                     headers: {
//                                                         "API-KEY":
//                                                             "e2ce764c-daf0-40f7-af22-472dae522b83",
//                                                     },
//                                                 }
//                                             )
//                                             .then((response) => {
//                                                 if (
//                                                     response.data.resultCode ===
//                                                     0
//                                                 ) {
//                                                     props.follow(u.id);
//                                                 }
//                                             });
//                                     }}
//                                 >
//                                     Follow
//                                 </button>
//                             )}
//                         </div>
//                     </span>
//                     <span>
//                         <span>
//                             <div>{u.name}</div>
//                             <div>{u.status}</div>
//                         </span>
//                         <span>
//                             <div>{u.location?.country}</div>
//                             <div>{u.location?.city}</div>
//                         </span>
//                     </span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Users;
