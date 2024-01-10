import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import App from './App';
import BasketStore from './store/BasketStore';
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
        basket: new BasketStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
