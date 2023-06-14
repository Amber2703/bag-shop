import { forwardRef } from "react"
import PropTypes from "prop-types"
import {
  Wrapper,
  Flex,
  Title,
  Text,
  Hr,
  Button,
} from "./../../components/ui/index";
import Carousel from './../../components/Carousel/index'
import ColorPicker from './../../components/ColorPicker/index'
import CountPicker from './../../components/CountPicker/index'
import SizePicker from './../../components/SizePicker/index'
import Image1 from './../../assets/image-1.png';
import Image2 from './../../assets/image-2.png';
import Image3 from './../../assets/image-3.png';
import Image4 from './../../assets/image-4.png';
import Image5 from './../../assets/image-5.png';
import Image6 from './../../assets/image-6.png';
import Image7 from './../../assets/image-7.png';
import Image8 from './../../assets/image-8.png';

const colors = [
  {
    id: '1', 
    color: '#000000',
  },
  {
    id: '2', 
    color: '#ff9966',
  },
  {
    id: '3', 
    color: '#669999',
  }
];

const sizes = [
  {
    id: 1, 
    label: 'M (Length - 23 cm; Width - 13 cm; Height - 19 cm)'
  },
  {
    id: 2, 
    label: 'L (Length - 36 cm; Width - 18 cm; Height - 24 cm)'
  }
];

const images = [
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
];

const Product = forwardRef(({ handleOrderScroll }, ref) => (
  <section>
    <Wrapper>
      <Title withBorder margin="70px 0 30px">
        Welcome, your intrepid travel companion!
      </Title>
      <Text margin="0 0 60px">
        Summer is over, but don&apos;t let that stop you from treating
        yourself to little joys!
      </Text>
      <Text margin="0 0 60px">
        Introducing our new clutch bag with a zipper, based on the popular
        Voyage model, featuring a trendy diamond pattern that&apos;s perfect
        for autumn.
      </Text>
      <Flex gap="30px" ref={ref}>
        <Flex flex={1}>
          <Carousel>
            {images.map((image) => (<img src={image} key={image} alt={image} />))} 
          </Carousel>
        </Flex>
        <Flex
          width="470px"
          direction="column"
          align="flex-start"
          justify="space-between"
        >
          <Title withBorder>Voyage bag</Title>
          <Flex justify="space-between" width="100%" margin="30px 0 20px">
            <Text weight={500}>2023</Text>
            <Text weight={500} color="#A667B0">
              Model - travel bag
            </Text>
          </Flex>
          <Text color="#020106" weight={700} size="26px">
            $54.99
          </Text>
          <Hr />
          <Text margin="5px 0">
            The diamond pattern is beautifully structured and the zipper is
            lined with delicate blush-colored floater leather that matches the
            cord. The bag is crafted from high-quality materials and features
            silver hardware. The leather base adds stability to the bag.
            Inside, you&apos;ll find a Teflon-lined compartment with a side
            pocket.
          </Text>
          <Text margin="5px 0">
            As a bonus, the bag comes with two handles:
          </Text>
          <ul>
            <li>A combination chain and leather strap</li>
            <li>A knitted cord handle</li>
          </ul>
          <Text margin="5px 0">Dimensions:</Text>
          <ul>
            <li>Length: 23 cm</li>
            <li>Width: 13 cm</li>
            <li>Height: 19 cm</li>
          </ul>
          <Hr />
          <Flex width="100%" align="flex-start">
            <Flex flex={1} justify="flex-start">
              <ColorPicker items={colors}/>                
            </Flex>
            <Flex flex={1}>
              <SizePicker items={sizes}/>
            </Flex>
          </Flex>
          <CountPicker />
          <Button onClick={handleOrderScroll}>place order</Button>
        </Flex>
      </Flex>
    </Wrapper>
  </section>
));

Product.displayName = "Product";

Product.propTypes = {
  handleOrderScroll: PropTypes.func.isRequired,
};

export default Product;
