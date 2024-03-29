import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalitemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {users.map((u) => (
                    <User
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                        user={u}
                        key={u.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
