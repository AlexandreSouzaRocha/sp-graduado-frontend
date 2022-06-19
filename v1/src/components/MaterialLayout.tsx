import React from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import MainTheme from '../themes';
import StyledSwitchTheme from './styles/SwitchTheme';
import CONSTANTS from '../commons/Constants';

const MaterialLayout = (props: React.PropsWithChildren<any>): JSX.Element => {
  const [themeEl, setThemeEl] = React.useState(CONSTANTS.THEMES.LIGHT);
  const navigate = useNavigate();
  const { children } = props;

  const changeTheme = () => (themeEl === CONSTANTS.THEMES.LIGHT ? MainTheme.lightTheme : MainTheme.darkTheme);

  const handleChangeTheme = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newTheme: string = !checked ? CONSTANTS.THEMES.LIGHT : CONSTANTS.THEMES.DARK;
    setThemeEl(newTheme);
  };

  const handleOnClickHome = (): void => {
    navigate(CONSTANTS.ROUTING.HOME);
  };

  return (
    <ThemeProvider theme={changeTheme()}>
      <CssBaseline />
      {children}
      <Header />
      <Container maxWidth="xs" sx={{ display: 'flex' }}>
        <Grid container spacing={1} alignItems="center" sx={{ ml: 15 }}>
          <Grid item>
            <Tooltip title="Trocar tema" arrow>
              <span>
                <StyledSwitchTheme value={themeEl} defaultValue={CONSTANTS.THEMES.LIGHT} onChange={handleChangeTheme} />
              </span>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Voltar para Home" arrow>
              <span>
                <IconButton size="large" color="primary" onClick={handleOnClickHome}>
                  <HomeIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default MaterialLayout;
