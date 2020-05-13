import React from "react";
import s from "./user.module.css";
import avatar from "../../common/img/avatar.png"
import StatusInfo from "./status/Status";
import EditProfile from "./editProfile/editProfile";
import UserInfo from "./userInfo/userInfo";
import {useState} from "react"
import LoadingDog from "../../common/img/480 (2).gif"

const User = ({ userInfo, putNewStatus, userStatus, isOwner, savePhoto, uploadNewInfo, error, isLoadNewFile}) => {

    let onPhotoChange = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    let [profileEditMode, setProfileEditMode] = useState(false)

    let profileEditModeEnable = () => {
        setProfileEditMode(true)
    }
    let profileEditModeDisable = () => {
        setProfileEditMode(false)
    }
    let onSubmit = (data) => {
        uploadNewInfo(data)
    }

    return (
        <div className={s.profile}>
            <div className={s.profileImg}>
                {!isLoadNewFile ? <img alt="User Avatar" className={s.profilePhoto} src={userInfo.photos.large != null ? userInfo.photos.large : avatar} /> :
                    <img alt="Loading avatar" className={s.profilePhoto} src={LoadingDog} />}
                {isOwner ? <span className={s.hoverOnImage}>Hover to change image</span>:null}
                <br/>
                {isOwner && !profileEditMode ? <button className={s.editButton} onClick={profileEditModeEnable}>EDIT PROFILE</button> : null}
                {isOwner ? <input className={s.uploadButton} type='file' onChange={onPhotoChange}/> : null}
                {error ? <div style={{color: "red", fontSize: "20px", fontWeight: "bold"}}> {error} </div> : null }
            </div>
            <div className={s.profileInfo}>
                <span className={s.profileName}>{userInfo.fullName}</span>
               {! profileEditMode ? <>
               <StatusInfo isOwner={isOwner} putNewStatus={putNewStatus} status={userStatus} userInfo={userInfo} />
                <UserInfo userInfo={userInfo} />
                </>
                : <EditProfile initialValues={userInfo} onSubmit={onSubmit} profileEditModeDisable={profileEditModeDisable} userInfo={userInfo} /> }
            </div>
        </div>
    );
}

export default User;