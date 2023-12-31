import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  position: ${({ relative }) => (relative ? "relative" : null)};
  height: ${({ height }) => (height ? height : null)};
`;

const Flex = styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : null)};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items: ${({ align }) => (align ? align : 'center')};
  flex-wrap: ${({ wrap = 'no-wrap' }) => wrap };
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  padding: ${({ padding }) => (padding ? padding : null)};
  margin: ${({ margin }) => (margin ? margin : null)};
  height: ${({ height }) => (height ? height : null)};
  flex: ${({ flex }) => (flex ? flex : null)};
  column-gap: ${({ gap }) => (gap ? gap : null)};
  row-gap: ${({ gap }) => (gap ? gap : null)};
`;

const Title = styled.h2`
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 32px;
text-transform: uppercase;
color: #020106;
padding: ${({ padding }) => (padding ? padding : null)};
margin: ${({ margin }) => (margin ? margin : '0')};
border-left: ${({ withBorder }) => (withBorder ? '3px solid #A667B0' : null)};
padding-left: ${({ withBorder }) => (withBorder ? '15px' : null)};

`;
const SubTitle = styled.h3`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 18px;
text-transform: uppercase;
color: #020106;
padding: ${({ padding }) => (padding ? padding : null)};
margin: ${({ margin }) => (margin ? margin : '0')};

${({ withBorder }) => 
    withBorder 
    ? `
    position: relative;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 45px;
        height: 3px;
        background: #A667B0;
    }
    `
: null}


`;

const Text = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: ${({ weight }) => (weight ? weight : '400')};
font-size: ${({ size }) => (size ? size : '18px')};
padding: ${({ padding }) => (padding ? padding : null)};
margin: ${({ margin }) => (margin ? margin : '0')};
color: ${({ color }) => (color ? color : '#282828')};
`

const Hr = styled.hr`
    width: 100%;
    margin: 20px 0;
    border-color: #b5b5b5;
    border-bottom: none;
`

const Button = styled.button`
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 18px;
text-transform: uppercase;
height: 60px;
border: none;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: ${({ width }) => (width ? width : '470px')};
color: ${({ color }) => (color ? color : '#ffffff')};
background: ${({ background }) => (background ? background : '#A667B0')};
`

export {Wrapper, Flex, Title, SubTitle, Text, Hr, Button};