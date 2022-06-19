import React from 'react';
import { Form, useFormikContext } from 'formik';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import FormTextField from './styles/FormTextField';
import ILogin from '../interfaces/ILogin';

const Login = (): JSX.Element => {
  const formik = useFormikContext<ILogin>();
  return (
    <Form>
      <Box sx={{ mt: 1, padding: 5 }}>
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
        <FormTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Link to="/forgot-password" replace>
          <Typography
            variant="h6"
            sx={{
              color: (theme) => theme.palette.primary.main,
              flexGrow: 1,
              fontStyle: 'inherit',
              fontWeight: '400',
              fontSize: '0.9em',
            }}
          >
            Esqueceu a senha?
          </Typography>
        </Link>
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
            {formik.isSubmitting ? '' : 'Login'}
          </Typography>
        </LoadingButton>
      </Box>
    </Form>
  );
};

export default Login;
