import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const AuthenticationLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default AuthenticationLayout;
