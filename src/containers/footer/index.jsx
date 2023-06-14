import { FooterSC, LinkContainer } from './styled';
import { Wrapper, Flex } from './../../components/ui/index'
import logo from "./../../assets/logo.png";
import twitterIcon from "./../../assets/twitter.svg";
import facebookIcon from "./../../assets/facebook.svg";
import telegramIcon from "./../../assets/telegram.svg";

function Footer() {
    return (
        <FooterSC>
            <Wrapper height='100%'>
                <Flex height='100%' justify='space-between'>
                    <img src={logo} alt="Logo" />
                    <LinkContainer>
                        <a href="https://twitter.com/" rel='noopener noreferrer' target='_blank'>
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                        <a href="https://facebook.com/" rel='noopener noreferrer' target='_blank'>
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://web.telegram.org.com/" rel='noopener noreferrer' target='_blank'>
                            <img src={telegramIcon} alt="Telegram" />
                        </a>
                    </LinkContainer>
                </Flex>
            </Wrapper>
        </FooterSC>
    )
}

export default Footer;
