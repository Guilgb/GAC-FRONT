import * as S from "./styles";
import * as T from "./types";

const Input = ({ label, type, placeholder, onChange, light, value, required }: T.InputProps): JSX.Element => {
    return (
        <S.InputContainer>
            <S.Label>{label}</S.Label>
            <S.Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                light={light}
                value={value}
                required={required}
            />
        </S.InputContainer>
    );
}

export default Input;