import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Logo from '../components/Logo';
import AboutUs from '../components/AboutUs';
import MaterialLayout from '../components/MaterialLayout';
import graduateLogoImg from '../assets/graduation-hat-and-diploma-purple.png';

const AboutPage = (): JSX.Element => {
  return (
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
          <Typography
            sx={{
              flexGrow: 1,
              color: (theme) => theme.palette.primary.main,
              fontStyle: 'italic',
              fontSize: '2.9em',
              fontWeight: 'bold',
              m: -4,
              padding: 1,
              letterSpacing: -1,
            }}
          >
            Quem Somos?
          </Typography>
        </AppBar>
        <Container component="main" maxWidth="lg" sx={{ padding: 3, mt: -6 }}>
          <Paper
            elevation={6}
            sx={{
              marginTop: 7,
              borderRadius: 3,
              padding: 5,
              bgcolor: (theme) => theme.palette.primary.dark,
            }}
          >
            <AboutUs />
          </Paper>
        </Container>
      </Box>
    </MaterialLayout>
  );
};

export default AboutPage;
