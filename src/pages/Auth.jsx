import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const naviage = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      naviage(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='enter email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='enter password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ? (
              <div>
                Haven`t account?{' '}
                <NavLink to={REGISTRATION_ROUTE}>log on!</NavLink>
              </div>
            ) : (
              <div>
                Have account? <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
              </div>
            )}
            <Button variant={'outline-success'} onClick={click}>
              {isLogin ? 'log in' : 'log on'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
