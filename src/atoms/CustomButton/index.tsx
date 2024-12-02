
import * as S from "./styles";
import * as T from "./types";
import * as H from "./helpers";

export const CustomButton: React.FC<T.CustomButtonProps> = ({
    children,
    color,
    hasborder,
    onClick,
    hasIcon,
    height,
    iconName,
    type,
}) => {
    return (
        <S.Button
            color={color}
            hasborder={hasborder}
            onClick={onClick}
            height={height}
            type={type ? type : "button"}
        >
            {(hasIcon && iconName) && <S.Icon src={H.handleIcon(iconName)} />}
            {children}
        </S.Button>
    );
};
