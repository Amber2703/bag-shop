import { useContext } from 'react'
import {Flex, Text} from './../../components/ui/index'
import Context from './../../containers/context/context'
import {Button} from './styled'
import PropTypes from 'prop-types';

function ColorPicker({items}) {
    const {color, setColor} = useContext(Context);
    const handleClick = (id) => () => setColor(id);
    return (
        <Flex direction='column' align='flex-start'>
            <Text weight={500}>Color</Text>
            <Flex gap='12px' margin='20px 0 0'>  
            {items.map((item) => (
                <Button 
                key={item.id}
                color={item.color}
                active={item.id === color}
                onClick={handleClick(item.id)}
                />
            ))}
            </Flex>
        </Flex>
    )
}

ColorPicker.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default ColorPicker;