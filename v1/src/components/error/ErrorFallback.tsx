/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material';

import MaterialLayout from '../MaterialLayout';
import Logo from '../Logo';
import logoImg from '../../assets/graduation-hat-and-diploma-purple.png';
import errorImg from '../../assets/error.png';

const StyledTypography = styled(Typography)(({ theme }) => ({
  animation: 'pulse 4s infinite both',
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.95)',
      filter: 'drop-shadow(1px 1px 1px #B765FF) saturate(1.2)',
      transition: 'box-shadow .5s',
      borderRadius: 5,
      color: theme.palette.primary.dark,
      opacity: 1,
    },
    '25%': {
      transform: 'scale(0.95)',
      filter: 'drop-shadow(1px 1px 1px #B765FF) saturate(1.3)',
      transition: 'box-shadow .5s',
      borderRadius: 5,
      color: theme.palette.primary.dark,
      opacity: 0.9,
    },
    '50%': {
      transform: 'scale(1)',
      filter: 'drop-shadow(2px 2px 2px #B765FF) saturate(1.4)',
      transition: 'box-shadow .5s',
      borderRadius: 5,
      color: theme.palette.primary.light,
      opacity: 0.8,
    },
    '75%': {
      transform: 'scale(1)',
      filter: 'drop-shadow(3px 3px 3px #B765FF) saturate(1.5)',
      transition: 'box-shadow .5s',
      borderRadius: 5,
      color: theme.palette.primary.light,
      opacity: 0.7,
    },
    '100%': {
      transform: 'scale(0.95)',
      filter: 'drop-shadow(3px 3px 3px #B765FF) saturate(1.6)',
      transition: 'box-shadow .5s',
      borderRadius: 5,
      color: theme.palette.primary.dark,
      opacity: 0.6,
    },
  },
}));
const ErrorFallback = (): JSX.Element => {
  return (
    <MaterialLayout>
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
            imageUrl={logoImg}
            alt="https://www.freepik.com"
            typographyStyles={{
              flexGrow: 1,
              color: (theme) => theme.palette.primary.main,
              fontStyle: 'inherit',
              fontSize: '2.5em',
              fontWeight: 'bold',
              mx: 1,
              my: 1,
              letterSpacing: -1,
            }}
          />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" color="primary">
        <Card
          sx={{
            borderRadius: 3,
            mt: 5,
            bgColor: (theme) => theme.palette.background.default,
          }}
        >
          <CardContent>
            <>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Avatar variant="square" src={errorImg} sx={{ width: 102, height: 102 }} />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      color: (theme) => theme.palette.primary.main,
                      fontStyle: 'inherit',
                      fontSize: '2.5em',
                      fontWeight: 'bold',
                      mx: 1,
                      my: 1,
                      letterSpacing: -1,
                      alignContent: 'center',
                    }}
                  >
                    Ops, Algo deu Errado! : (
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <StyledTypography
                  sx={{
                    color: (theme) => theme.palette.primary.light,
                    fontStyle: 'inherit',
                    fontSize: '4em',
                    fontWeight: '600',
                    mx: 1,
                    my: 1,
                    mt: 2,
                    letterSpacing: -1,
                    alignContent: 'center',
                  }}
                >
                  500 Internal Server Error
                </StyledTypography>
              </Box>
            </>
          </CardContent>
        </Card>
      </Container>
    </MaterialLayout>
  );
};

export default ErrorFallback;
