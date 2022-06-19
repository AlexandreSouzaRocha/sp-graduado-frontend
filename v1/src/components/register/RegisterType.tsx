import React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useFormikContext } from 'formik';
import { useLocation } from 'react-router-dom';

import graduateLogoImg from '../../assets/graduation-hat-and-diploma-black.png';
import godfatherLogoImg from '../../assets/ladder-1-black.png';
import IPerson from '../../interfaces/IPerson';
import StyledToggleButton from '../styles/ToggleButton';
import Logo from '../Logo';
import RegisterTypeContext from '../contexts/RegisterType';

const RegisterType = (): JSX.Element => {
  const formik = useFormikContext<IPerson>();
  const [open, setOpen] = React.useState(false);
  const [alignment, setAlignment] = React.useState(formik.values.type || '');
  const { setType } = React.useContext(RegisterTypeContext);

  const location = useLocation();
  const routingState: any = location?.state;

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleOnChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    if (routingState) {
      formik.setFieldValue('contacts.email', routingState.email);
      formik.setFieldValue('name', routingState.name);
    }

    formik.handleChange(event);
    setAlignment(newAlignment);
    formik.setFieldValue('type', newAlignment);
    setType(newAlignment);
  };

  return (
    <>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Typography
          id="title-typo"
          sx={{
            fontSize: '1.6em',
            fontWeight: 600,
            padding: 1,
            color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
            fontStyle: 'italic',
          }}
        >
          Como deseja se registrar?
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <ToggleButtonGroup
          id="toggle-button-group"
          orientation="vertical"
          value={alignment}
          exclusive
          onChange={handleOnChange}
          sx={{ m: 4 }}
        >
          <StyledToggleButton id="godfather-toggle-button" value="GODFATHER">
            <Logo
              key="graduate-logo"
              imageUrl={godfatherLogoImg}
              width={72}
              height={72}
              textLogo="Padrinho"
              alt="https://www.freepik.com"
              typographyStyles={{
                fontSize: '1.7em',
                fontWeight: 600,
                padding: 1,
                color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
              }}
            />
          </StyledToggleButton>
          <StyledToggleButton id="graduate" value="GRADUATE">
            <Logo
              key="graduate-logo"
              imageUrl={graduateLogoImg}
              width={72}
              height={72}
              textLogo="Graduando"
              alt="https://www.freepik.com"
              typographyStyles={{
                fontSize: '1.7em',
                fontWeight: 600,
                padding: 1,
                color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
              }}
            />
          </StyledToggleButton>
        </ToggleButtonGroup>
      </Box>
      {formik.touched.type && Boolean(formik.errors.type) && (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%', filter: 'saturate(1.2)' }}>
            {formik.errors.type}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default RegisterType;
