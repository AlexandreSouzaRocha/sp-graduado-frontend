import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import Logo from '../../Logo';
import godfatherLogoImg from '../../../assets/graduation-hat-and-diploma-black.png';
import CONSTANTS from '../../../commons/Constants';
import DrawerContext from '../../contexts/Drawer';
import IGraduateProfileProps from '../../../interfaces/props/IGraduateProfileProps';

const MenuGraduateHeader = (props: IGraduateProfileProps): JSX.Element => {
  const { setCurrentContent, setOpenDrawer } = React.useContext(DrawerContext);
  const { graduateInfo } = props;

  const handleOnClickContacts = (): void => {
    setCurrentContent(0);
    setOpenDrawer(false);
  };
  return (
    <>
      <Container component="main">
        <Container sx={{ justifyContent: 'center', mt: 3, paddingTop: '64px' }}>
          <Logo
            key="graduate-logo"
            imageUrl={godfatherLogoImg}
            width={200}
            height={200}
            textLogo="Graduando"
            alt="https://www.freepik.com"
            typographyStyles={{
              fontSize: '2.2em',
              fontWeight: 500,
              color: (theme) => (theme.palette.mode === 'dark' ? '#FFF' : '#000'),
              alignContent: 'center',
              justifyContent: 'center',
              ml: 3,
            }}
          />
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 3 }}>
          <Link to={CONSTANTS.ROUTING.MENU.GRADUATE} onClick={handleOnClickContacts}>
            <Grid container direction="row" spacing={1} alignContent="center">
              <Grid item>
                <Typography
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    flexGrow: 0,
                    fontSize: '0.8rem',
                    fontWeight: 400,
                  }}
                >
                  {`${graduateInfo.email} | ${graduateInfo.phone}`}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default MenuGraduateHeader;
