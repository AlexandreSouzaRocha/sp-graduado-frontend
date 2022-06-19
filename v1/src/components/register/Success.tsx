import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Logo from '../Logo';
import confirmationImg from '../../assets/confirmation-purple.png';
import IRegisterSuccessProps from '../../interfaces/props/IRegisterSuccessProps';
import DateTime from '../../commons/DateTime';
import CONSTANTS from '../../commons/Constants';

const RegisterSuccess = (props: IRegisterSuccessProps): JSX.Element => {
  const {
    person: { type, contacts, name, documentNumber, birthDate },
  } = props;
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Logo
          width={120}
          height={120}
          textLogo="Registro Confirmado!"
          imageUrl={confirmationImg}
          alt="https://www.freepik.com"
          typographyStyles={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'inherit',
            fontSize: '3em',
            fontWeight: 'bold',
            mx: 2,
            my: 2,
            letterSpacing: -1,
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          gutterBottom
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'italic',
            fontSize: '2.5em',
            fontWeight: 400,
            letterSpacing: -1,
            my: 4,
          }}
        >
          {`Obrigado por se registrar, ${(CONSTANTS.REGISTER_TYPE as any)[type]}!`}
        </Typography>
      </Box>
      <Grid container direction="column" spacing={3} sx={{ alignItems: 'center', mt: 0 }}>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            sx={{
              flexGrow: 1,
              color: (theme) => theme.palette.text.secondary,
              fontStyle: 'inherit',
              fontSize: '1.7em',
              fontWeight: 400,
              letterSpacing: -1,
              my: -5,
            }}
          >
            Agora você poderá acessar a plataforma com o seu login e senha.
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={4} sx={{ alignItems: 'center', m: 2 }}>
        <Grid item xs={8}>
          <Grid container sx={{ mb: 2 }}>
            <Grid item xs={5}>
              <Typography
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontSize: '1.3em',
                  fontWeight: 400,
                  letterSpacing: -1,
                }}
              >
                Nome:
              </Typography>
              <Grid item>
                <Typography
                  sx={{
                    mt: -2.3,
                    color: (theme) => theme.palette.text.secondary,
                    fontStyle: 'inherit',
                    fontSize: '1.3em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  {name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Typography
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontSize: '1.3em',
                  fontWeight: 400,
                  letterSpacing: -1,
                }}
              >
                Email:
              </Typography>
              <Grid item>
                <Typography
                  sx={{
                    mt: -2.3,
                    color: (theme) => theme.palette.text.secondary,
                    fontStyle: 'inherit',
                    fontSize: '1.3em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  {contacts.email}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <Typography
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontSize: '1.3em',
                  fontWeight: 400,
                  letterSpacing: -1,
                }}
              >
                CPF:
              </Typography>
              <Grid item>
                <Typography
                  sx={{
                    mt: -2.3,
                    color: (theme) => theme.palette.text.secondary,
                    fontStyle: 'inherit',
                    fontSize: '1.3em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  {documentNumber}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography
                gutterBottom
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'inherit',
                  fontSize: '1.3em',
                  fontWeight: 400,
                  letterSpacing: -1,
                }}
              >
                Data de Nascimento:
              </Typography>
              <Grid item>
                <Typography
                  sx={{
                    mt: -2.3,
                    color: (theme) => theme.palette.text.secondary,
                    fontStyle: 'inherit',
                    fontSize: '1.3em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  {DateTime.fromJsToFormat(birthDate, CONSTANTS.DATE.BRAZILIAN)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {type && type === CONSTANTS.REGISTER_TYPE.GRADUATE && (
        <Grid container direction="column" spacing={3} sx={{ alignItems: 'center', mt: 0 }}>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              sx={{
                flexGrow: 1,
                color: (theme) => theme.palette.primary.main,
                fontStyle: 'italic',
                fontSize: '1.2em',
                fontWeight: 400,
                letterSpacing: -1,
                my: 0,
              }}
            >
              Em breve você receberá um email com mais informações!
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default RegisterSuccess;
