import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormikContext } from 'formik';

import Logo from '../Logo';
import termsAndConditionsImg from '../../assets/contract-purple.png';
import ITermsAndConditionsProps from '../../interfaces/props/ITermsAndConditionsProps';
import IPerson from '../../interfaces/IPerson';

const TermsAndConditions = ({ terms }: ITermsAndConditionsProps): JSX.Element => {
  const formik = useFormikContext<IPerson>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    formik.setFieldValue('termsAndCoditionsAccepted', event.target.checked);
  };

  return (
    <>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Logo
          alt="https://www.flaticon.com/authors/andy-horvath"
          width={72}
          height={72}
          imageUrl={termsAndConditionsImg}
          textLogo="Termos e Condições"
          typographyStyles={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'inherit',
            fontSize: '2.5em',
            fontWeight: 'bold',
            mx: 1,
            my: 1,
            letterSpacing: -1,
          }}
        />
      </Box>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Paper
          elevation={3}
          sx={{
            m: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            alignContent: 'center',
            width: 600,
            height: 500,
          }}
        >
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              overflow: 'auto',
            }}
          >
            <Typography
              sx={{
                flexGrow: 1,
                color: 'black',
                fontStyle: 'inherit',
                fontSize: '1.5em',
                fontWeight: 600,
                padding: 5,
                letterSpacing: -1,
              }}
            >
              {terms}
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <FormControlLabel
          control={
            <CheckBox
              id="terms-and-conditions-checkbox"
              size="medium"
              checked={formik.values.termsAndCoditionsAccepted}
              onChange={handleOnChange}
            />
          }
          label="Eu li e estou de acordo com os termos declarados acima."
          sx={{ color: 'primary.main', '& .MuiSvgIcon-root': { fontSize: '2em' } }}
        />
      </Box>
    </>
  );
};

export default TermsAndConditions;
