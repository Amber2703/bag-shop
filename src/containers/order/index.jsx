import { forwardRef } from "react"
import { Wrapper, Title, Text } from "./../../components/ui/index";
import Form from "./../../components/Form/index"

const Order = forwardRef((_, ref) => (
    <section>
      <Wrapper>
        <Title ref={ref} withBorder margin="70px 0 30px">
          Be the first in time
        </Title>
        <Text margin='0 0 30px'>
          Seize the moment and secure your spot at the forefront of a
          prestigious list, as one of the esteemed pioneers to embrace the
          ownership of the cutting-edge new model
        </Text>
        <Form />
      </Wrapper>
    </section>
  ));

  Order.displayName = "Order";

export default Order;
