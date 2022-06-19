import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

import Logo from '../../Logo';
import logoImg from '../../../assets/graduation-hat-and-diploma-white.png';
import DraweContext from '../../contexts/Drawer';
import CONSTANTS from '../../../commons/Constants';
import IGodfatherProfileContentProps from '../../../interfaces/props/IGodfatherProfileContentProps';

const MenuGodfatherAppBar = (props: IGodfatherProfileContentProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { openDrawer, setOpenDrawer, setCurrentContent } = React.useContext(DraweContext);
  const navigation = useNavigate();
  const { godfatherInfo } = props;

  const openMenu = Boolean(anchorEl);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnClickLogOut = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    localStorage.removeItem('userInfoGodfather');
    localStorage.clear();
    handleClose();
    setOpenDrawer(false);
    navigation(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  const handleOnClickMyProfile = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    handleClose();
    setOpenDrawer(false);
    setCurrentContent(1);
  };

  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow: 1 }}>
          <Toolbar>
            <IconButton
              size="small"
              aria-label="user account profile"
              aria-controls="account-profile-appbar"
              aria-haspopup="false"
              sx={{
                color: '#fff',
                mr: 5,
                ...(openDrawer && {
                  display: 'none',
                  transition: (theme) =>
                    theme.transitions.create('margin', {
                      easing: theme.transitions.easing.easeOut,
                      duration: theme.transitions.duration.enteringScreen,
                    }),
                }),
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </IconButton>
            <IconButton
              size="small"
              aria-label="user account profile"
              aria-controls="account-profile-appbar"
              aria-haspopup="false"
              sx={{
                color: '#fff',
                mr: 5,
                ...(!openDrawer && {
                  display: 'none',
                  transition: (theme) =>
                    theme.transitions.create('margin', {
                      easing: theme.transitions.easing.easeOut,
                      duration: theme.transitions.duration.enteringScreen,
                    }),
                }),
              }}
              onClick={toggleDrawer(false)}
            >
              <CloseIcon
                sx={{
                  width: 32,
                  height: 32,
                }}
              />
            </IconButton>
            <Logo
              width={52}
              height={52}
              textLogo="SP GRADUADO"
              imageUrl={logoImg}
              alt="https://www.freepik.com"
              typographyStyles={{
                flexGrow: 1,
                color: '#FFF',
                fontStyle: 'inherit',
                fontSize: '1.3em',
                fontWeight: 'bold',
                mx: 1,
                my: 1,
                letterSpacing: -1,
              }}
            />
            <Typography
              component="div"
              sx={{
                flexGrow: 0,
                color: '#FFF',
                fontStyle: 'inherit',
                fontWeight: 400,
                fontSize: '1.2em',
                letterSpacing: -1,
                mx: 1,
              }}
            >
              {`Padrinho, ${godfatherInfo.name || 'Ops, Ocorreu um Erro! : ('}`}
            </Typography>
            <Tooltip title="Minha Conta" arrow>
              <span>
                <IconButton
                  size="small"
                  aria-label="user account profile"
                  aria-controls="account-profile-appbar"
                  aria-haspopup="false"
                  sx={{ color: '#fff' }}
                  onClick={handleOnClick}
                >
                  <AccountCircle
                    sx={{
                      width: 42,
                      height: 42,
                    }}
                  />
                </IconButton>
              </span>
            </Tooltip>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleOnClickMyProfile}>Meu Perfil</MenuItem>
              <MenuItem onClick={handleOnClickLogOut}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default MenuGodfatherAppBar;
