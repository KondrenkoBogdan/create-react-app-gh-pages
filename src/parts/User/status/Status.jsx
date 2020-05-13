import React from "react";
import s from "./status.module.css";
import { useState } from "react";
import { useEffect } from "react";

const StatusInfo = ({putNewStatus, status, isOwner}) => {

    let [editMode, setEditMode] = useState(false);
    let [localStatus, setStatus] = useState(status)

    const deactivateEditMode = () => {
        setEditMode(false)
        putNewStatus(localStatus)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(status);
    },[status])

    if(!isOwner) return <div><span className={s.profileStatus}>{status || "No status"}</span></div>
    return <>
        {!editMode ? <div>
            <span onClick={() => { setEditMode(true) }} className={s.profileStatus}>{status || "No status"}</span>
            <div className={s.titleToChange}>Click on status to change</div>
        </div> : null}
        {editMode ? <div>
            <textarea className={s.statusTextarea} autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={localStatus}></textarea>
        </div> : null}
    </>
}

export default StatusInfo