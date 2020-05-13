import React from "react";
import s from "./social.module.css"
import Post from "./posts/post";
import AddPostReduxForm from "./addPostForm/addPost";

const Social = ({socialPage, deletePostFunction, addPostFunction, userName,reset}) => {

    let onSubmit = (newPostData) => {
        addPostFunction(newPostData.newPostMessage, userName);
    };

    return (
        <div className={s.back}>
            <div className={s.addPostDiv}>
                <AddPostReduxForm length={socialPage.postData.length} onSubmit={onSubmit} />
            </div>
            <div className={s.post}>
                <Post socialPage={socialPage} deletePostFunction={deletePostFunction}/>
            </div>
        </div>
    );
};
export default Social;






