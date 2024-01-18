import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: false,
                fullName: "Vovanec",
                status: "Im a boss",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 2,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: true,
                fullName: "Svetlana",
                status: "Im a boss 1",
                location: { city: "Khaifa", country: "Israel" },
            },
            {
                id: 3,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: false,
                fullName: "Timka",
                status: "Im a boss 2",
                location: { city: "Kharkov", country: "Ukraine" },
            },
            {
                id: 4,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: false,
                fullName: "Beta",
                status: "Im a boss 3",
                location: { city: "Novodruzesk", country: "Ukraine" },
            },
            {
                id: 5,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: true,
                fullName: "Alfa",
                status: "Im a boss 3",
                location: { city: "Novodruzesk", country: "Ukraine" },
            },
            {
                id: 6,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: true,
                fullName: "Mikki",
                status: "Im a boss 3",
                location: { city: "Bondarevka", country: "Ukraine" },
            },
            {
                id: 7,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: false,
                fullName: "Madlena",
                status: "Im a boss 3",
                location: { city: "Yevpatoria", country: "Ukraine" },
            },
            {
                id: 8,
                photoUrl:
                    "https://politeka.net/crops/f8bc2d/620x0/1/0/2018/03/01/bXyYpepmUlh3rQNalcT3zdoVswBML2gz.jpg",
                followed: true,
                fullName: "Alica",
                status: "Im a boss 3",
                location: { city: "Sakhnovschina", country: "Ukraine" },
            },
        ]);
    }
    return (
        <div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photoUrl}
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
