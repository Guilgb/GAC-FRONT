import React from "react";
import * as S from "./styles";
import * as T from "./types";

const FileInput: React.FC<T.FileInputProps> = ({ onChange, fileName, required }) => {

  return (
    <div>
      <S.Label>Anexar arquivo (.pdf ou .docx): *</S.Label>
      <S.FileInputContainer>
        <S.HiddenInput
          type="file"
          onChange={onChange}
          accept=".pdf,.docx"
          id="file-upload"
          required={required}
        />
        <label htmlFor="file-upload">
          <S.FileName>{fileName || "Selecionar arquivo"}</S.FileName>
        </label>
      </S.FileInputContainer>
    </div>
  );
};

export default FileInput;