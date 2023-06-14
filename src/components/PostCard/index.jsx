import PropTypes from 'prop-types';
import { SubTitle, Flex, Text } from './../../components/ui/index';

function PostCard({ image, title, text }) {
  return (
    <Flex direction='column' align='flex-start' flex={1}>
      <img src={image} alt={title} style={{ width: '100%', height: '325px', objectFit: 'cover' }}/>
      <SubTitle withBorder margin='30px 0'>{title}</SubTitle>
      <Text margin='0'>{text}</Text>
    </Flex>
  );
}

PostCard.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PostCard;