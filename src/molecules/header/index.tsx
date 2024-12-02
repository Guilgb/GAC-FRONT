import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import logoIcon from "../../assets/icons/logoIcon.svg"
import ThreeBarsIcon from "../../assets/icons/barsIcon.png"
import CloseIcon from "../../assets/icons/closeIcon.png"
import profilePhoto from "../../assets/imgs/profile-photo.png"
import toast, { Toaster } from 'react-hot-toast';

import * as S from "./styles"
import api from "../../services/api"

const Header = () => {
    const navigate = useNavigate();
    const [openSideBar, setOpenSideBar] = useState(true);
    const [name, setName] = useState<any>()
    const [path, setPath] = useState<string>()

    const openSideBarEvent = () => {
        setOpenSideBar(!openSideBar);
        dispatchEvent(
            new CustomEvent("openSideBar", {
                detail: { openSideBar: !openSideBar },
            })
        )
    }

    useEffect(() => {
        api.get(`/user/info`).then((response) => {
            setName(response.data)
            sessionStorage.setItem("userId", response?.data?.id)
        }).catch(() => {
        })
    }, [])

    useEffect(() => {
        const handleAlert = (event: any) => {
            if (event.detail.type === "success") toast.success(event.detail.message);
            else toast.error(event.detail.message);
        };
    
        window.addEventListener("handleAlert", handleAlert);
    
        return () => {
            window.removeEventListener("handleAlert", handleAlert);
        };
    }, []);
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        setPath(window.location.pathname);
        if (!token && path !== '/register') {
            navigate("/");
        }
    })

    return (
        <S.Container>
            <Toaster
                position="top-right"
            />
            <S.SideBarIcon src={openSideBar ? CloseIcon : ThreeBarsIcon} alt="open-side-bar" onClick={openSideBarEvent} />
            <S.LogoBox>
                <S.LogoImg src={logoIcon} alt="logo" />
                <S.LogoText>G A C</S.LogoText>
            </S.LogoBox>

            <S.UserBox>
                <S.UserName>{name?.name.split(" ")[0]}</S.UserName>
                <S.ProfilePhoto src={profilePhoto} />
            </S.UserBox>
        </S.Container>
    );
}

export default Header;