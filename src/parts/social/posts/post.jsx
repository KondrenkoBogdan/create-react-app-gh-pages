import React from "react";
import s from "./post.module.css";
import avatar from "../../../common/img/avatar.png";

const Post = ({ deletePostFunction, socialPage }) => {

    let post = socialPage.postData.map(post =>
        <div key={post.id} className={s.post}>
            <div className={s.avatar}>
                <img alt="Avatar" className={s.avatar} src={avatar} />
            </div>
            <div className={s.messageDiv}>
                <p className={s.nameLink}>{post.name}</p>
                <p className={s.message}>{post.message}</p>
            </div>
            <div className={s.likeDiv}>
                <button onClick={() => { deletePostFunction(post.id) }} className={s.like}>DELETE POST</button>
                <p className={s.likeNum}>Likes:{post.likes}</p>
            </div>
        </div>);

    return (
        <>
            {post}
        </>
    );
}

export default Post;