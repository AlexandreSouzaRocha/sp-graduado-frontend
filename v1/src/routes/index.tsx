import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Home from '../pages/Home';
import LoginPage from '../pages/Login';
import GodfatherPage from '../pages/Godfather';
import GraduatePage from '../pages/Graduate';
import SuccessPage from '../pages/Success';
import RegisterPage from '../pages/Register';
import ContactsPage from '../pages/Contacts';
import ForgotPasswordPage from '../pages/ForgotPassword';
import CONSTANTS from '../commons/Constants';
import MainTheme from '../themes';
import AboutPage from '../pages/AboutUs';

const Routes = (): JSX.Element => {
  return (
    <ThemeProvider theme={MainTheme.lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Router>
          <Route path={CONSTANTS.ROUTING.HOME} element={<Home />} />
          <Route path={CONSTANTS.ROUTING.LOGIN} element={<LoginPage />} />
          <Route path={CONSTANTS.ROUTING.MENU.GODFATHER} element={<GodfatherPage />} />
          <Route path={CONSTANTS.ROUTING.MENU.GRADUATE} element={<GraduatePage />} />
          <Route path={CONSTANTS.ROUTING.REGISTER.CREATE} element={<RegisterPage />} />
          <Route path={CONSTANTS.ROUTING.REGISTER.SUCCESS} element={<SuccessPage />} />
          <Route path={CONSTANTS.ROUTING.CONTACT} element={<ContactsPage />} />
          <Route path={CONSTANTS.ROUTING.ABOUTUS} element={<AboutPage />} />
          <Route path={CONSTANTS.ROUTING.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
