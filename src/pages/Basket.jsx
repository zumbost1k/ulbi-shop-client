import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DeviceItem from '../components/DeviceItem';
import { observer } from 'mobx-react-lite';
import { fetchDeviceFromBasket } from '../http/deviceAPI';

const Basket = observer(() => {
  const [basketDevices, setBasketDevices] = useState(null);
  useEffect(() => {
    fetchDeviceFromBasket().then((data) => setBasketDevices(data));
  }, []);

  return (
    <Container className='ml-auto mr-auto'>
      {!basketDevices || basketDevices.length === 0 ? (
        <div className='text-secondary text-center fs-1 fw-bold m-5'>
          Basket is empty
        </div>
      ) : (
        basketDevices.map((device) => {
          return (
            <Row className='justify-content-md-center p-4' key={device.id}>
              <DeviceItem device={device} />
            </Row>
          );
        })
      )}
    </Container>
  );
});

export default Basket;
