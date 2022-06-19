import React from 'react';
import Typography from '@mui/material/Typography';
import ToolBar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AccountCircleSharp from '@mui/icons-material/AccountCircleSharp';
import LockSharp from '@mui/icons-material/LockSharp';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';

import Logo from '../components/Logo';
import CONSTANTS from '../commons/Constants';
import LoginFormValidation from '../validations/LoginForm';
import logoImg from '../assets/graduation-hat-and-diploma-purple.png';
import ILogin from '../interfaces/ILogin';
import Login from '../components/Login';
import LoginModel from '../models/Login';
import MaterialLayout from '../components/MaterialLayout';
import LoginEntity from '../entities/Login';
import ErrorBoundary from '../components/error/ErrorBoundary';

const openDialogInitialvalues = { isOpen: false, message: '' };

const LoginPage = (): JSX.Element => {
  const [openDialog, setOpenDialog] = React.useState(openDialogInitialvalues);

  const navigate: NavigateFunction = useNavigate();

  const handleCloseSnackbar = (): void => {
    setOpenDialog(openDialogInitialvalues);
  };

  const handleOnClickSingUp = (): void => {
    navigate(CONSTANTS.ROUTING.REGISTER.CREATE, { replace: true });
  };

  const handleSubmit = async (fields: ILogin, { resetForm, setSubmitting }: FormikHelpers<ILogin>) => {
    try {
      const { data } = await LoginEntity.singIn(fields);

      setSubmitting(false);
      resetForm();

      if (data.person_type === CONSTANTS.REGISTER_TYPE.ALUNO) {
        localStorage.setItem('userInfoGraduate', JSON.stringify({ ...data }));
        navigate(CONSTANTS.ROUTING.MENU.GRADUATE, { replace: true, state: { hasOpen: true, userInfo: { ...data } } });
      } else {
        localStorage.setItem('userInfoGodfather', JSON.stringify({ ...data }));
        navigate(CONSTANTS.ROUTING.MENU.GODFATHER, { replace: true, state: { hasOpen: true, userInfo: { ...data } } });
      }
    } catch (error) {
      setSubmitting(false);
      setOpenDialog({ isOpen: true, message: error.message });
    }
  };

  return (
    <ErrorBoundary>
      <MaterialLayout>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            elevation={0}
            position="static"
            sx={{ backgroundColor: (theme) => theme.palette.background.default, padding: 2 }}
          >
            <ToolBar>
              <Logo
                width={62}
                height={62}
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
              <Typography
                component="div"
                sx={{
                  flexGrow: 0,
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontWeight: '600',
                  fontSize: '1.2em',
                  letterSpacing: -1,
                  mx: -1,
                }}
              >
                Sign Up
              </Typography>
              <Tooltip title="Sign up" arrow>
                <span>
                  <IconButton
                    size="large"
                    aria-label="user login registration"
                    aria-controls="signup-appbar"
                    aria-haspopup="false"
                    color="primary"
                    onClick={handleOnClickSingUp}
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
            </ToolBar>
          </AppBar>
          <Container component="main" maxWidth="sm">
            <Paper
              elevation={10}
              sx={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 3,
              }}
            >
              <Avatar sx={{ mt: 5, bgcolor: 'primary.main', width: 72, height: 72 }}>
                <LockSharp />
              </Avatar>
              <Typography
                component="h1"
                sx={{
                  flexGrow: 0,
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontWeight: '500',
                  fontSize: '1.7em',
                }}
              >
                Sign In
              </Typography>
              <Formik
                initialValues={LoginModel.getInitialValues()}
                validationSchema={LoginFormValidation.getValidationSchema()}
                onSubmit={handleSubmit}
              >
                <Login />
              </Formik>
            </Paper>
          </Container>
          {openDialog.isOpen && (
            <Snackbar open={openDialog.isOpen} autoHideDuration={4000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%', filter: 'saturate(1.2)' }}>
                {openDialog.message}
              </Alert>
            </Snackbar>
          )}
        </Box>
      </MaterialLayout>
    </ErrorBoundary>
  );
};

export default LoginPage;
