import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

import * as S from "./styles"
import * as H from "./helpers"
import api from "../../services/api";

const Aside = () => {
    const [filteredPages, setFilteredPages] = useState<any>()
    const pages = [{ title: "Página Inicial", url: "/dashboard", icon: "dashboard" },
    { title: "Avaliações", url: "/evaluation", icon: "evaluation" },
    { title: "Atividades", url: "/activities", icon: "activities" },
    { title: "Gerenciamento", url: "/management", icon: "management" },
    { title: "Perfil", url: "/profile", icon: "profile" },]

    const [currentPage, setCurrentPage] = useState(window.location.pathname)
    const navigate = useNavigate();


    useEffect(() => {
        api.get(`/user/info`).then((response) => {
            setFilteredPages(pages.filter(page => response.data.permissions.includes(page.icon)));
        }).catch(() => {
        })
    }, [])

    const handleCLick = (url: string) => () => {
        navigate(url)
        setCurrentPage(url)
    }

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/");
        dispatchEvent(
            new CustomEvent("Userlogout", {
                detail: { logout: true },
            })
        )
    }

    return (
        <S.AsideContainer>
            <S.ItemsBox>
                {filteredPages?.map((item: any) =>
                    <S.Link key={item.title} selected={currentPage === item.url} onClick={handleCLick(item.url)}>
                        <img src={H.getIcon(item.icon)} alt="aside-icon" />
                        {item.title}
                    </S.Link>)
                }
            </S.ItemsBox>

            <S.LogoutBox>
                <S.Link selected={false}
                    onClick={handleLogout}>
                    <img src={H.getIcon("logout")} alt="aside-icon" />
                    Sair
                </S.Link>
            </S.LogoutBox>
        </S.AsideContainer>
    )
}

export default Aside;