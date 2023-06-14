import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Flex } from "./../../components/ui/index";
import {
  Arrow,
  SlideBtn,
  SlideItem,
  Container,
  ContainerItem,
  CarouselTrack,
} from "./styled";

function Carousel({ children, width = "670px", height = "502px" }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transform, setTransform] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const transVal = containerRef.current.offsetWidth * activeSlide;
    setTransform(`-${transVal}px`);
  }, [activeSlide]);

  const nextSlide = () => {
    if (activeSlide === children.length - 1) {
      setActiveSlide(0); // Wrap around to the first slide
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(children.length - 1); // Go to the last slide
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const selectSlide = (i) => () => {
    setActiveSlide(i);
  };

  return (
    <div>
      <Container ref={containerRef} width={width} height={height}>
        <SlideBtn onClick={prevSlide}>
          <Arrow />
        </SlideBtn>
        <CarouselTrack transform={transform}>
          {children.map((item, i) => (
            <ContainerItem
              key={"container_item_key" + i}
              width={width}
              height={height}
            >
              {item}
            </ContainerItem>
          ))}
        </CarouselTrack>
        <SlideBtn rotate="true" onClick={nextSlide}>
          <Arrow />
        </SlideBtn>
      </Container>
      <Flex width="670px" gap="10px" margin="100px 0 0" wrap="wrap">
        {children.map((item, i) => (
          <SlideItem key={i} onClick={selectSlide(i)}>
            {item}
          </SlideItem>
        ))}
      </Flex>
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Carousel;
