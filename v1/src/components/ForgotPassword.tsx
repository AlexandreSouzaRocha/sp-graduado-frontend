import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LockOpenIcon from '@mui/icons-material/LockOpenSharp';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import LockReset from '@mui/icons-material/LockResetOutlined';
import { useNavigate } from 'react-router-dom';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';

import Logo from './Logo';
import FormTextField from './styles/FormTextField';
import logoImg from '../assets/graduation-hat-and-diploma-purple.png';
import CONSTANTS from '../commons/Constants';
import ForgotPasswordModel from '../models/ForgotPassword';
import IForgotPassword from '../interfaces/IForgotPassword';
import Utils from '../commons/Utils';
import ForgotPasswordFormValidation from '../validations/ForgotPasswordForm';
import AlertDialog from './AlertDialog';

const ForgotPassword = (): JSX.Element => {
  const [subimitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();

  const handleOnClickSingIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    navigate(CONSTANTS.ROUTING.LOGIN, { replace: true });
  };

  const handleCloseAlerDialog = (): void => {
    setSubmitted(false);
    navigate(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  const handleSubmit = async (
    _fields: IForgotPassword,
    { resetForm, setSubmitting }: FormikHelpers<IForgotPassword>,
  ) => {
    await Utils.sleep(3000);
    setSubmitted(true);
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.background.default, padding: 2 }}
      >
        <Toolbar>
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
              mx: -0.5,
            }}
          >
            Sing In
          </Typography>
          <Tooltip title="Sing Ip" arrow>
            <span>
              <IconButton
                size="large"
                aria-label="user login"
                aria-controls="signin-appbar"
                aria-haspopup="false"
                color="primary"
                onClick={handleOnClickSingIn}
              >
                <LockOpenIcon
                  sx={{
                    width: 32,
                    height: 32,
                  }}
                />
              </IconButton>
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            padding: 2,
          }}
        >
          <Avatar sx={{ mt: 1, mb: 1, bgcolor: 'primary.main', width: 62, height: 62 }}>
            <LockReset />
          </Avatar>
          <Typography
            component="h1"
            sx={{
              flexGrow: 0,
              color: (theme) => theme.palette.primary.main,
              fontStyle: 'inherit',
              fontWeight: '500',
              fontSize: '1.7em',
              mb: 4,
            }}
          >
            Esqueci Minha Senha
          </Typography>
          <Formik
            initialValues={ForgotPasswordModel.getInitialValues()}
            validationSchema={ForgotPasswordFormValidation.getValidationSchema()}
            onSubmit={handleSubmit}
          >
            {(formik: FormikProps<IForgotPassword>) => (
              <Form>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  placeholder="email@example.com"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <LoadingButton
                  type="submit"
                  loadingPosition="center"
                  loading={formik.isSubmitting}
                  disabled={formik.isSubmitting}
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 3,
                    mb: 2,
                    background: (theme) => (theme.palette.mode === 'dark' ? '#000' : theme.palette.background.paper),
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      flexGrow: 1,
                      fontStyle: 'inherit',
                      fontWeight: '500',
                      height: 30,
                    }}
                  >
                    {formik.isSubmitting ? '' : 'Resetar Senha'}
                  </Typography>
                </LoadingButton>
              </Form>
            )}
          </Formik>
          {subimitted && (
            <AlertDialog
              buttonText="Ok"
              open={subimitted}
              titleText="Reset de Senha"
              textContent="Reset de senha solicitado com sucesso! Em breve você receberá um e-mail com mais informações"
              onClose={handleCloseAlerDialog}
            />
          )}
        </Paper>
      </Container>
    </>
  );
};

export default ForgotPassword;
