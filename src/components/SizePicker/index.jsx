import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from './../../components/ui/index';
import { Label, Input, Checked } from './styled';
import Context from './../../containers/context/context';

function SizePicker({ items }) {
  const { size, setSize } = useContext(Context);
  const handleClick = (id) => () => setSize(id);
  
  return (
    <Flex direction='column' align='flex-start'>
      <Text weight={500}>Size</Text>
      {items.map((item, index) => (
        <Label first={index === 0} key={item.id}>
          <Checked checked={size === item.id} />
          <Input           
            name='size'
            type='radio'
            value={size === item.id}
            checked={size === item.id}
            onChange={handleClick(item.id)}
          />
          {item.label}
        </Label>
      ))}
    </Flex>
  );
}

SizePicker.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SizePicker;
