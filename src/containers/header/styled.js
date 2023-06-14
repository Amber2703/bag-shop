import styled from "styled-components";
import HeaderBg from "./../../assets/header-bg.jpg"

export const HeaderSC = styled.header`
    height: 100vh;
    width: 100%;
    background-image: url(${HeaderBg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Absolute = styled.div`
    position: absolute;
    right: 0;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const HeaderText = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: ${({ weight }) => (weight ? weight : '400')};
font-size: ${({ size }) => (size ? size : '55px')};
text-transform: uppercase;
text-align: end;
margin-top: 0;
margin-bottom: ${({ space }) => (space ? space : '10px')};
color:  ${({ purple }) => (purple ? '#A667B0' : '#ffffff')};
`