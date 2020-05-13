import React from "react"
import { NavLink } from "react-router-dom";
import avatar from "../../../common/img/avatar.png";
import s from './users.module.css';

const UsersList = ({ friendsData, followLoad, follow, isFollowedB }) => {
    return (
        <div className={s.friendsPlace}>
            {friendsData.map(friend => (
                <div key={friend.id} className={s.friendCard}>
                    <NavLink className={s.linkCard} to={"/user/" + friend.id}>
                        <div className={s.avatarDiv}>
                            <img alt="User Avatar" className={s.avatar} src={friend.photos.small != null ? friend.photos.small : avatar} />
                        </div>
                        <div className={s.nameDiv}>
                            <p className={s.name}>{friend.name}</p>
                        </div>
                    </NavLink>
                    <button disabled={followLoad.some(id => id === friend.id)} onClick={() => { follow(friend.id, friend.followed) }
                    } className={s.followButton}>{isFollowedB(friend.followed)}</button>
                </div>
            ))}
        </div>
    )
}

export default UsersList