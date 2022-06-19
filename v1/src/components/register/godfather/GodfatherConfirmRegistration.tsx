import React from 'react';
import { useFormikContext } from 'formik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckBox from '@mui/material/Checkbox';

import IGodfather from '../../../interfaces/IGodfather';
import CONSTANTS from '../../../commons/Constants';
import DateTime from '../../../commons/DateTime';

const GodfatherConfirmRegistration = (): JSX.Element => {
  const formik = useFormikContext<IGodfather>();

  return (
    <>
      <Box sx={{ justifyContent: 'center' }}>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'inherit',
            fontSize: '2.5em',
            fontWeight: 700,
            m: 1,
            letterSpacing: -1,
          }}
        >
          {`Olá, ${(CONSTANTS.REGISTER_TYPE as any)[formik.values.type]}, ${formik.values.name}!`}
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'inherit',
            fontSize: '2.5em',
            fontWeight: 700,
            m: 1,
            letterSpacing: -1,
          }}
        >
          Confirme alguns dados para seguir com seu Registro!
        </Typography>
      </Box>
      <>
        <Grid container direction="row" sx={{ mt: 5, mb: 5 }}>
          <Grid item xs={12}>
            <Box>
              <Divider sx={{ m: 2 }} />
            </Box>
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Nome:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Data de Nascimento:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {DateTime.fromJsToFormat(formik.values.birthDate, CONSTANTS.DATE.BRAZILIAN)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  CPF/CNPJ:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.documentNumber}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Telefone:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.contacts.phoneNumber}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Divider sx={{ m: 2 }} />
            </Box>
            <Grid container>
              <Grid item xs={4}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Email:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.contacts.email}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Senha:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {''.padStart(formik.values.password.length, '*')}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Confirmação da Senha:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {''.padStart(formik.values.confirmPassword.length, '*')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Divider sx={{ m: 2 }} />
            </Box>
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Renda Mensal:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(formik.values.monthlyIncome)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  paragraph
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                    wordBreak: 'break-word',
                  }}
                >
                  Motivo pelo qual Você quer ser um Padrinho:
                </Typography>
                <Grid item>
                  <Typography
                    sx={{
                      mt: -2.5,
                      color: (theme) => theme.palette.text.secondary,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 400,
                      letterSpacing: -1,
                    }}
                  >
                    {formik.values.reasonWhy}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  gutterBottom
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontStyle: 'inherit',
                    fontSize: '1.5em',
                    fontWeight: 400,
                    letterSpacing: -1,
                  }}
                >
                  Termos e Condições Aceitos:
                </Typography>
                <Grid item>
                  <CheckBox
                    id="terms-and-conditions-checkbox"
                    size="medium"
                    checked={formik.values.termsAndCoditionsAccepted}
                    disabled
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Divider sx={{ m: 2 }} />
        </Box>
      </>
    </>
  );
};

export default GodfatherConfirmRegistration;
