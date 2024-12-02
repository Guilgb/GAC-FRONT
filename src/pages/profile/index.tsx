import { useEffect, useState } from "react";
import profilePhoto from "../../assets/imgs/profile-photo.png"
import * as S from "./styles.ts"
import api from "../../services/api.ts";

const Profile = () => {
    const [profile, setProfile] = useState<any>()
    useEffect(() => {
        api.get("/user/info").then((response) => {
            setProfile(response.data)
        }).catch(() => {
        })
    }, [])
    return (
        <S.Content>
           
            <S.ProfileImg src={profilePhoto}  alt="profile-photo"/>
            <S.UserInfos>
                <p><b>Nome: </b>{profile?.name} </p>    
                {profile?.courses?.[0]?.courseName && <p><b>Curso: </b> {profile?.courses?.[0]?.courseName}</p>}    
                {profile?.registration && <p><b>Matrícula: </b> {profile?.registration}</p>}
                <p><b>E-mail: </b> {profile?.email}</p>    
            </S.UserInfos>
        </S.Content>
    );
}

export default Profile;