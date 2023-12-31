import styled from "styled-components";

export const Button = styled.button`
border-radius: 50%;
width: 34px;
height: 34px;
background: ${({ color}) => (color ? color : '#ffffff')};
border: 2px white solid;
box-shadow: 0px 0px 0px 2px ${({active}) => (active ? '#A667B0' : '#282828')};
`