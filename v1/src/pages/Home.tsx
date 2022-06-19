import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import AccountCircleSharp from '@mui/icons-material/AccountCircleSharp';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Formik, FormikHelpers } from 'formik';

import Logo from '../components/Logo';
import logoImg from '../assets/graduation-hat-and-diploma-white.png';
import university from '../assets/University.jpg';
import graduateLogoImg from '../assets/graduation-hat-and-diploma-purple.png';
import CONSTANTS from '../commons/Constants';
import MaterialLayout from '../components/MaterialLayout';
import ICadastro from '../interfaces/ICadastro';
import Cadastro from '../components/Cadastro';
import CadastroModel from '../models/Cadastro';
import CadastroFormValidation from '../validations/CadastroForm';
import Utils from '../commons/Utils';
import StyledButton from '../components/styles/Button';

const Home = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const handleOnClickSingIn = (): void => {
    navigate(CONSTANTS.ROUTING.LOGIN, { replace: true });
  };

  const handleOnClickHome = (): void => {
    navigate(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  const handleOnClickContacts = (): void => {
    navigate(CONSTANTS.ROUTING.CONTACT, { replace: true });
  };

  const handleOnClickAboutUs = (): void => {
    navigate(CONSTANTS.ROUTING.ABOUTUS, { replace: true });
  };

  const handleSubmit = async (fields: ICadastro, { resetForm, setSubmitting }: FormikHelpers<ICadastro>) => {
    setSubmitting(true);
    await Utils.sleep(3000);
    setSubmitting(false);
    resetForm();
    navigate(CONSTANTS.ROUTING.REGISTER.CREATE, { replace: true, state: { ...fields } });
  };

  return (
    <MaterialLayout>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow: 1 }}>
        <Toolbar>
          <Logo
            width={52}
            height={52}
            textLogo="SP GRADUADO"
            imageUrl={logoImg}
            alt="https://www.freepik.com"
            typographyStyles={{
              flexGrow: 1,
              color: '#FFF',
              fontStyle: 'inherit',
              fontSize: '1.3em',
              fontWeight: 'bold',
              mx: 1,
              my: 1,
              letterSpacing: -1,
            }}
          />
          <Container maxWidth="xl" sx={{ justifyContent: 'center', display: 'flex' }}>
            <Grid container spacing={6}>
              <Grid item>
                <StyledButton
                  onClick={handleOnClickHome}
                  variant="text"
                  sx={{
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#121212' : theme.palette.primary.main),
                    textTransform: 'none',
                    color: '#BFBFBF',
                    fontWeight: '400',
                    fontStyle: 'inherit',
                    fontSize: '1.8em',
                    letterSpacing: -1,
                    '&:hover': {
                      transition: 'filter .3s',
                      color: '#FFF',
                      float: 'left',
                      filter: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'saturate(1.4) drop-shadow(0 0 11px #FFF)'
                          : 'saturate(1)  drop-shadow(0 0 11px #FFF)',
                    },
                  }}
                >
                  Home
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledButton
                  onClick={handleOnClickAboutUs}
                  variant="text"
                  sx={{
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#121212' : theme.palette.primary.main),
                    textTransform: 'none',
                    color: '#BFBFBF',
                    fontWeight: '400',
                    fontStyle: 'inherit',
                    fontSize: '1.8em',
                    letterSpacing: -1,
                    '&:hover': {
                      transition: 'filter .3s',
                      color: '#FFF',
                      float: 'left',
                      filter: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'saturate(1.4) drop-shadow(0 0 11px #FFF)'
                          : 'saturate(1)  drop-shadow(0 0 11px #FFF)',
                    },
                  }}
                >
                  Quem Somos
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledButton
                  onClick={handleOnClickContacts}
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    color: '#BFBFBF',
                    bgcolor: (theme) =>
                      theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main,
                    fontWeight: '400',
                    fontStyle: 'inherit',
                    fontSize: '1.8em',
                    letterSpacing: -1,
                    '&:hover': {
                      transition: 'filter .3s',
                      color: '#FFF',
                      float: 'left',
                      filter: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'saturate(1.4) drop-shadow(0 0 11px #FFF)'
                          : 'saturate(1)  drop-shadow(0 0 11px #FFF)',
                    },
                  }}
                >
                  Contatos
                </StyledButton>
              </Grid>
            </Grid>
          </Container>
          <Typography
            component="div"
            sx={{
              flexGrow: 0,
              color: '#FFF',
              fontStyle: 'inherit',
              fontWeight: '400',
              fontSize: '1.4em',
              letterSpacing: -1,
              mh: 200,
            }}
          >
            Sign In
          </Typography>
          <Tooltip title="Sign In" arrow>
            <span>
              <IconButton
                size="large"
                aria-label="user login "
                aria-controls="singin-appbar"
                aria-haspopup="false"
                sx={{ color: '#fff' }}
                onClick={handleOnClickSingIn}
              >
                <AccountCircleSharp
                  sx={{
                    width: 42,
                    height: 42,
                  }}
                />
              </IconButton>
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: `url(${university})`,
          backgroundSize: 'cover',
          boxShadow: '0 0 10px #B765FF',
          height: '82vh',
        }}
      />
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs sx={{ mx: 10 }}>
            <Card
              elevation={6}
              sx={{
                maxWidth: 600,
                borderRadius: 3,
              }}
            >
              <CardHeader
                title={
                  <Typography
                    sx={{
                      flexGrow: 1,
                      color: '#000',
                      fontStyle: 'inherit',
                      fontSize: '2.3em',
                      fontWeight: '500',
                      mx: 1,
                      my: 1,
                      letterSpacing: -1,
                    }}
                  >
                    Sobre o Padrinho
                  </Typography>
                }
                align="center"
              />
              <CardContent>
                <Typography variant="body1" color="text.primary" align="center">
                  Pessoa filantrópica que deseja se responsabilizar pelo pagamento das mensalidades do ensino superior
                  de graduandos que não possuem condições de arcar com os custos. Tal individuo pode escolher qual
                  estudante deseja apoiar e acompanhar o seu desenvolvimento, a fim de compreender se o valor investido
                  esta sendo para um bom uso.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs sx={{ mx: -6 }}>
            <Card
              elevation={6}
              sx={{
                maxWidth: 600,
                borderRadius: 3,
              }}
            >
              <CardHeader
                title={
                  <Typography
                    sx={{
                      flexGrow: 1,
                      color: '#000',
                      fontStyle: 'inherit',
                      fontSize: '2.3em',
                      fontWeight: '500',
                      mx: 1,
                      my: 1,
                      letterSpacing: -1,
                    }}
                  >
                    Sobre o Graduando
                  </Typography>
                }
                align="center"
              />
              <CardContent>
                <Typography variant="body1" color="text.primary" align="center">
                  Estudante regularmente matriculado no ensino superior privado, com baixa renda e que não consegue
                  arcar com os custos da mensalidade da faculdade, e portanto necessita de apoio financeiro. O individuo
                  se cadastra, expõe seu perfil e aguarda um padrinho aceitar ajudar com as mensalidades, a partir deste
                  momento as responsabilidades financeiras são do padrinho.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
          }}
        >
          <Toolbar>
            <Logo
              width={90}
              height={90}
              textLogo="SP GRADUADO"
              imageUrl={graduateLogoImg}
              alt="https://www.freepik.com"
              typographyStyles={{
                color: (theme) => theme.palette.primary.main,
                fontStyle: 'inherit',
                fontSize: '2.4em',
                fontWeight: 'bold',
                m: 4,
                letterSpacing: -1,
              }}
            />
          </Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              color: (theme) => theme.palette.primary.main,
              fontStyle: 'italic',
              fontSize: '2.3em',
              fontWeight: 'bold',
              m: -7,
              padding: 1,
              letterSpacing: -1,
            }}
          >
            Registre-se
          </Typography>
          <Formik
            initialValues={CadastroModel.getInitialValues()}
            validationSchema={CadastroFormValidation.getValidationSchema()}
            onSubmit={handleSubmit}
          >
            <Cadastro />
          </Formik>
        </Paper>
      </Container>
    </MaterialLayout>
  );
};

export default Home;
