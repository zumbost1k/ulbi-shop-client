import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index.js';
const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={Component} />;
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={Component} />;
      })}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default AppRouter;
