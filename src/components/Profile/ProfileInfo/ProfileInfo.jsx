import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = ({ admin }) => {
    console.log('admin', admin)
    return (
        <div className = {style.profinfo}>
            <img src="https://img5.goodfon.com/wallpaper/nbig/2/d7/kot-koshka-ryzhii-vzgliad-morda-fon-zelenye-glaza-kote-ko-13.jpg" alt="profileinfo" />
            {admin ? admin[0]?.login : 'Войдите в учетную запись'}
        </div>
        
    )
}


export default ProfileInfo;