import styled from "styled-components";


export const Input = styled.input.attrs(({type}) => ({type: type || "text",}))`
    border: none;
    border-bottom: 1px solid #A667B0;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 0;
    width: 470px;
    color: #282828;
    margin-bottom: 40px;

    &::placeholder {
        color: ${({error}) => (error ? '#e6110c' : '#A667B0')};
    }

    &:disabled {
        opacity: 0.3;
    }
`;