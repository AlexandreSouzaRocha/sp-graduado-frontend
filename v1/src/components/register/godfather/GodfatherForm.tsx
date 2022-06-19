import React from 'react';
import Grid from '@mui/material/Grid';
import { useFormikContext } from 'formik';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockRounded from '@mui/icons-material/LockRounded';
import Box from '@mui/material/Box';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import Paper from '@mui/material/Paper';

import FormTextField from '../../styles/FormTextField';
import IGraduate from '../../../interfaces/IGraduate';
import CONSTANTS from '../../../commons/Constants';
import StyledTextField from '../../styles/TextField';

const GodfatherForm = (): JSX.Element => {
  const formik = useFormikContext<IGraduate>();

  const handleBirthDateOnChange = (date: string | null): void => {
    formik.setFieldValue('birthDate', date?.toString());
  };

  return (
    <>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'inherit',
            fontSize: '2.7em',
            fontWeight: 600,
            mx: 1,
            my: 1,
            letterSpacing: -1,
            filter: 'drop-shadow(5px 1px 5px gray)',
          }}
        >
          Bem vindo, Padrinho!
        </Typography>
      </Box>
      <Grid container direction="row" spacing={6}>
        <Grid item xs>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6}>
              <FormTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Seu nome"
                name="name"
                autoComplete="name"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <FormTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="documentNumber"
                name="documentNumber"
                label="CPF/CNPJ"
                placeholder="CPF Ou CNPJ (Somente Números)"
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <LocalizationProvider dateAdapter={AdapterLuxon}>
                <DesktopDatePicker
                  label="Data de Nascimento"
                  inputFormat={CONSTANTS.DATE.BRAZILIAN}
                  value={formik.values.birthDate}
                  onChange={(event) => handleBirthDateOnChange(event)}
                  renderInput={(params) => (
                    <StyledTextField
                      {...params}
                      id="birthDate"
                      key="birthDate"
                      name="birthDate"
                      error={formik.touched?.birthDate && Boolean(formik.errors.birthDate)}
                      helperText={formik.errors.birthDate}
                      sx={{ mt: 2 }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={3} sm={3}>
              <FormTextField
                type="number"
                label="99999.00"
                placeholder="99999.00"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="monthlyIncome"
                name="monthlyIncome"
              />
            </Grid>
            <Grid item xs={5} sm={5}>
              <FormTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="contacts.phoneNumber"
                name="contacts.phoneNumber"
                autoComplete="phoneNumber"
                label="Telefone"
                placeholder="99999999999 (Somente Números)"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="reasonWhy"
                label="Conte um pouco para nós do porque você quer ser um padrinho!"
                name="reasonWhy"
                autoComplete="reasonWhy"
                multiline
                rows={6}
                placeholder="Conte um pouco para nós do porque você quer ser um padrinho!"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Paper
            elevation={6}
            sx={{
              m: 2,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              padding: 5,
              alignItems: 'center',
              boxShadow: '6px 6px 15px #A8AAAD',
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72 }}>
              <LockRounded />
            </Avatar>
            <Typography
              component="h1"
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontStyle: 'inherit',
                fontWeight: '600',
                fontSize: '1.7em',
              }}
            >
              Dados para Login
            </Typography>
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
              <Grid item xs={10} sm={10}>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="contacts.email"
                  label="Email Address"
                  placeholder="email@example.com"
                  name="contacts.email"
                />
              </Grid>
              <Grid item xs={10} sm={10}>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  placeholder="Password"
                  name="password"
                  autoComplete="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={10} sm={10}>
                <FormTextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default GodfatherForm;
