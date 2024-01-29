import React from "react";
import classes from "./Paginator.module.css";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((p) => {
                return (
                    <span
                        key={p}
                        onClick={() => {
                            onPageChanged(p);
                        }}
                        className={
                            currentPage === p ? classes.selectedPage : ""
                        }
                    >
                        {p}
                    </span>
                );
            })}
        </div>
    );
};

export default Paginator;
