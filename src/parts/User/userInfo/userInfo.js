import React from "react"
import SocialMedia from "./../socialMedia/SocialMedia";
import { useState } from "react";
import s from "./userInfo.module.css";

const UserInfo = ({userInfo}) => {

    let [socialMediaDisplay, setSocialMediaDisplay] = useState(true);

    let toggleSocialMediaDisplay = () => {
        if(socialMediaDisplay===true){
            setSocialMediaDisplay(false)
        } else {setSocialMediaDisplay(true)}
    }
    
    return <>
        <hr className={s.hr} />
        {userInfo.aboutMe ? <div className={s.aboutMe}>About Me: {userInfo.aboutMe}</div> : null}
        {userInfo.contacts.facebook || userInfo.contacts.website || userInfo.contacts.vk || userInfo.contacts.twitter ||
            userInfo.contacts.instagram || userInfo.contacts.youtube || userInfo.contacts.github ||
            userInfo.contacts.mainLink ?
            <div className={s.socialMediaDiv}>
                <div style={{ display: "flex" }}>
                    <button onClick={toggleSocialMediaDisplay} className={s.titleBut}>+</button>
                    <div className={s.titleDiv}>Social Media:</div>
                </div>
                {socialMediaDisplay ? <SocialMedia contacts={userInfo.contacts} /> : null}
            </div>
            : null}
        {userInfo.lookingForAJob !== false ? <div className={s.profileLookingForAJobDescription}>Looking For A Job: {userInfo.lookingForAJobDescription}</div> : null}
    </>
}

export default UserInfo;