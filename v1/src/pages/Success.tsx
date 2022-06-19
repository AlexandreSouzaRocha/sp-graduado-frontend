import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';

import RegisterSuccess from '../components/register/Success';
import MaterialLayout from '../components/MaterialLayout';
import Logo from '../components/Logo';
import graduateLogoImg from '../assets/graduation-hat-and-diploma-purple.png';
import IPerson from '../interfaces/IPerson';
import ErrorBoundary from '../components/error/ErrorBoundary';

const SuccessPage = (): JSX.Element => {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <MaterialLayout>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            elevation={0}
            position="static"
            sx={{ backgroundColor: (theme) => theme.palette.background.default, padding: 2, alignItems: 'center' }}
          >
            <Toolbar>
              <Logo
                width={102}
                height={102}
                textLogo="SP GRADUADO"
                imageUrl={graduateLogoImg}
                alt="https://www.freepik.com"
                typographyStyles={{
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontSize: '3em',
                  fontWeight: 'bold',
                  m: 1,
                  letterSpacing: -1,
                }}
              />
            </Toolbar>
          </AppBar>
          <Container component="main" maxWidth="md" sx={{ padding: 3 }}>
            <Paper
              elevation={6}
              sx={{
                marginTop: 5,
                borderRadius: 3,
                padding: 5,
              }}
            >
              <RegisterSuccess person={location?.state as IPerson} />
            </Paper>
          </Container>
        </Box>
      </MaterialLayout>
    </ErrorBoundary>
  );
};

export default SuccessPage;
