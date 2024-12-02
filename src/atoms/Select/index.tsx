import * as S from "./styles";
import * as T from "./types";

const Select = ({ label, onChange, options, value, required }: T.SelectProps): JSX.Element => {
    return (
        <S.SelectContainer>
            <S.Label>{label}</S.Label>
            <S.Select
                onChange={onChange}
                value={value}
                required={required}
            >
                <option value="">Selecione uma opção</option>
                {options ? options.map((option) =>
                    <option value={option} key={option}>{option}
                    </option>)
                    : []}
            </S.Select>
        </S.SelectContainer>
    );
}

export default Select;