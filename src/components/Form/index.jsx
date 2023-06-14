import { useState, useContext } from "react";
import { Flex, Button, Text} from "./../../components/ui/index";
import TextField from "../TextField/index";
import Context from "./../../containers/context/context";
import { BordereContainer } from "./styled";
import checkout from './../../assets/checkout.png';

const Tabs = ["Place Order", "Check Order Status"];

function Form() {
  const { size, color, count } = useContext(Context);
  const [selectedTab, setSelectedTab] = useState(0);
  const [submitIsDone, setSubmitIsDone] = useState('');
  const [status, setStatus] = useState();
  const [formData, setFormData] = useState({
    fullName: {
      value: "",
      error: false,
    },
    email: {
      value: "",
      error: false,
    },
    phone: {
      value: "",
      error: false,
    },
    deliveryDate: {
      value: new Date().toISOString().replace(/T.+/g, ""),
      error: false,
    },
  });

  const [deliveryNumber, setDeliveryNumber] = useState({
        value: "",
        error: false,
  })

  const onChangeFormData = (key) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [key]: { ...prev[key], value: e.target.value },
    }));
  };

  const onChangeDelivery = (e) => {
    setDeliveryNumber((prev) => ({...prev, value: e.target.value}))
  }

  const validateFormData = () => {
    let obj = {...formData};
    Object.keys(obj).forEach((key) => obj[key].error = !obj[key].value);
    setFormData(obj);

    return Object.keys(obj).every((key) => !obj[key].error);
  }

  const onSubmitFormData = (e) => {
    e.preventDefault();
    if (validateFormData()) {
      fetch('http://localhost:3000/bag-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset: utf-8',
        },
        body: JSON.stringify({
          name: formData.fullName.value,
          date: formData.deliveryDate.value,
          email: formData.email.value,
          phone: formData.phone.value,
          size,
          color,
          count,
        }),
      })
        .then((res) => res.json())
        .then(({ id }) =>
          setSubmitIsDone(`Your order number is ${id} `)
        );
    }
  };
  

  const validateDelivery = () => {
    return !!deliveryNumber.value; // Return true if delivery number is not empty
  };
  

  const onSubmitDelivery = (e) => {
    e.preventDefault();
    if (validateDelivery()) {
      fetch(`http://localhost:3000/bag-request/${deliveryNumber.value}`)
        .then((res) => {
          if (res.ok) {
            setStatus(200);
          } else if (res.status === 404) {
            setStatus(400);
          }
        })
        .catch(() => {
          setStatus(400);
        });
    }
  };
  
  
  
  
  

  return (
    <BordereContainer>
      <Flex>
        {Tabs.map((tab, index) => (
          <Flex flex={1} key={tab}>
            <Button
              width="100%"
              color={selectedTab === index ? "#A667B0" : "#FFFFFF"}
              background={selectedTab === index ? "#FFFFFF" : "#A667B0"}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </Button>
          </Flex>
        ))}
      </Flex>
      {selectedTab === 0 && (
        <Flex padding='60px 80px' direction='column'>
          <img src={checkout} alt="Order picture" width='200px'/>
          <Text margin='30px 0 100px' weight={500} color="#A667B0">VOYAGE BAG</Text>
          
          <form onSubmit={onSubmitFormData}>
            <TextField 
                placeholder='Full name'
                errorLabel='Enter full name'
                error={formData['fullName'].error}
                value={formData['fullName'].value}
                onChange={onChangeFormData('fullName')}
            />
            <TextField 
                placeholder='Email address'
                errorLabel='Enter email address'
                error={formData['email'].error}
                value={formData['email'].value}
                onChange={onChangeFormData('email')}
            />
            <TextField 
                placeholder='Phone number'
                errorLabel='Enter phone number'
                error={formData['phone'].error}
                value={formData['phone'].value}
                onChange={onChangeFormData('phone')}
            />
            <TextField 
                disabled
                placeholder='Delivery Date'
                errorLabel='Enter delivery date'
                error={formData['deliveryDate'].error}
                value={formData['deliveryDate'].value}
                onChange={onChangeFormData('deliveryDate')}
            />
            {submitIsDone || <Button type='submit'>Place Order</Button>}
          </form>
        </Flex>
      )}
      {selectedTab === 1 && (
      <Flex padding='60px 80px' direction='column'>      
      
      <Text margin='30px 0 100px' weight={500} color="#A667B0">Input the order number to discover its current status</Text>
       
      <form action="" onSubmit={onSubmitDelivery}>
      <TextField 
                placeholder='Order number'
                errorLabel='Enter order ID here'
                error={deliveryNumber.error}
                value={deliveryNumber.value}
                onChange={onChangeDelivery}
        />
        <Button type='submit'>Get Information</Button>
        <p>
  {status === 200
    ? "The order is waiting to be shipped"
    : status === 400
    ? "Invalid order ID."
    : ""}
</p>

      </form>
        
      </Flex>)}
    </BordereContainer>
  );
}

export default Form;
