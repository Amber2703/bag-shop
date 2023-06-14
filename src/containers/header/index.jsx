import PropTypes from "prop-types";
import { Wrapper, Flex, Button } from "./../../components/ui/index";
import { HeaderSC, Absolute, HeaderText } from "./styled";
import logo from "./../../assets/logo.png"

function Header({ handleProductScroll }) {
  return (
    <HeaderSC>
      <Wrapper relative height="100%">
        <Flex padding="24px 0 0">
          <img src={logo} alt="Logo" />
        </Flex>
        <Absolute>
          <HeaderText purple weight={700}>
            new
          </HeaderText>
          <HeaderText>elegant</HeaderText>
          <HeaderText size="71px" weight={900} space="30px">
            Bags of your style
          </HeaderText>
          <Button onClick={handleProductScroll}>buy now</Button>
        </Absolute>
      </Wrapper>
    </HeaderSC>
  );
}

Header.propTypes = {
  handleProductScroll: PropTypes.func.isRequired,
};

export default Header;
