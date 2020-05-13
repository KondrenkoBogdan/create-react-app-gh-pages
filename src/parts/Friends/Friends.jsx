import React from "react";
import Pagination from "../../common/Paginator/Pagination";
import UsersList from "./usersList/UsersList";
import Preloader from "../preloader/preloader";

let Users = (props) => {

    return (
        <div>
            <Pagination {...props} />
            {props.isFetching ? <Preloader /> : <UsersList {...props} />}
        </div>
    );
}

export default Users;
