import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import CONSTANTS from '../commons/Constants';

const Copyright = (): JSX.Element => {
  return (
    <>
      <Link to={CONSTANTS.ROUTING.CONTACT} replace>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            flexGrow: 0,
            fontSize: '1rem',
            fontWeight: 700,
          }}
        >
          {`Copyright ©${new Date().getFullYear()} SP Graduado | Todos os direitos reservados | Contate-nos`}
        </Typography>
      </Link>
    </>
  );
};

export default Copyright;
