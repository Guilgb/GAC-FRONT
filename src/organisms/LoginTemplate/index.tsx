import { ReactNode } from "react";

import * as S from "./styles"

interface LoginTemplateProps {
    children: ReactNode;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ children }) => {
    return (
        <S.Container>
            <S.Content>{children}</S.Content>
        </S.Container>
    );
}

export default LoginTemplate;