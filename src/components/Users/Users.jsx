import React, { useEffect } from "react";
import classes from "./Users.module.css";
import instance from "../../redux/api-instance";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {
    // useEffect(() => {

    // }, [props.users]);

    let getUsers = () => {
        if (props.users.length === 0) {
            instance
                .get("/users") // Обратите внимание на префикс /api, он уже добавляется прокси
                .then((response) => {
                    props.setUsers(response.data.items); // Предположим, что данные находятся в свойстве items
                });
        }
    };

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={
                                    u.photos.small != null
                                        ? u.photos.small
                                        : userPhoto
                                }
                                className={classes.userPhoto}
                            />
                        </div>
                        <div>
                            {u.followed ? (
                                <button onClick={() => props.unfollow(u.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button onClick={() => props.follow(u.id)}>
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
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
