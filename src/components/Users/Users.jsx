import React, { useEffect } from "react";
import classes from "./Users.module.css";
import instance from "../../redux/api-instance";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
    constructor(props) {
        super(props);
        instance.get("/users").then((response) => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        return (
            <div>
                {this.props.users.map((u) => (
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
                                    <button
                                        onClick={() =>
                                            this.props.unfollow(u.id)
                                        }
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => this.props.follow(u.id)}
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
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
