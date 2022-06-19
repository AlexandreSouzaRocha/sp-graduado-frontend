import React from 'react';
import { Form, useFormikContext } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import FormTextField from './styles/FormTextField';
import ICadastro from '../interfaces/ICadastro';

const Cadastro = (): JSX.Element => {
  const formik = useFormikContext<ICadastro>();
  return (
    <Form>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 10, justifyContent: 'center' }}>
        <FormTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          placeholder="email@example.com"
          name="email"
          autoComplete="email"
          sx={{
            m: 3,
          }}
        />
        <FormTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="name"
          label="Seu Nome"
          placeholder="Seu Nome"
          id="name"
          autoComplete="current-name"
          sx={{
            m: 3,
          }}
        />
        <LoadingButton
          type="submit"
          fullWidth
          loadingPosition="center"
          loading={formik.isSubmitting}
          disabled={formik.isSubmitting}
          variant="outlined"
          sx={{
            mt: 3,
            mb: 6,
            ml: 2,
            mr: 2,
            height: 50,
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
            {formik.isSubmitting ? '' : 'Cadastrar'}
          </Typography>
        </LoadingButton>
      </Box>
    </Form>
  );
};

export default Cadastro;
