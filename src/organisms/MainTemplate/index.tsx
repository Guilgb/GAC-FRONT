import { ReactNode, useEffect, useState } from "react";
import Aside from "../../molecules/aside";
import Header from "../../molecules/header";

import * as S from "./styles"

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
    const [openSideBar, setOpenSideBar] = useState(true);
    
    useEffect(() => {
        window.addEventListener("openSideBar", (event: any) => {
            setOpenSideBar(event.detail.openSideBar);
        })
    }, []);

    return (
        <S.Container>
            <Header />
            <S.MainWrapper>
                {openSideBar && <Aside />}
                <S.Content>{children}</S.Content>
            </S.MainWrapper>
        </S.Container>
    );
}

export default MainTemplate;