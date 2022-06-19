import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircleSharp';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

import CONSTANTS from '../../../commons/Constants';
import DrawerContext from '../../contexts/Drawer';
import godfatherImg from '../../../assets/ladder.png';

const ICON = {
  DEFAULT_SIZE: {
    width: 32,
    height: 32,
  },
};

const MenuList = (): JSX.Element => {
  const { setOpenDrawer, setCurrentContent } = React.useContext(DrawerContext);
  const navigation = useNavigate();

  const handleClose = (): void => {
    setOpenDrawer(false);
  };

  const handleOnClickLogOut = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    localStorage.removeItem('userInfoGodfather');
    localStorage.clear();
    handleClose();
    navigation(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  const handleOnClickMyProfile = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    handleClose();
    setCurrentContent(1);
  };

  const handleOnPatronize = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    handleClose();
    setCurrentContent(2);
  };

  const handleOnClickHome = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    handleClose();
    navigation(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  return (
    <>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOnClickMyProfile}>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: 'primary.main', ...ICON.DEFAULT_SIZE }}>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Acessar Perfil" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOnPatronize}>
              <ListItemIcon sx={{ color: (theme) => theme.palette.primary.main, ...ICON.DEFAULT_SIZE }}>
                <Avatar src={godfatherImg} sx={{ bgcolor: 'primary.main', ...ICON.DEFAULT_SIZE }} />
              </ListItemIcon>
              <ListItemText primary="Apadrinhar Graduando" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOnClickHome}>
              <ListItemIcon sx={{ color: (theme) => theme.palette.primary.main, ...ICON.DEFAULT_SIZE }}>
                <Avatar sx={{ bgcolor: 'primary.main', ...ICON.DEFAULT_SIZE }}>
                  <HomeIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Voltar Para Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOnClickLogOut}>
              <ListItemIcon sx={{ color: (theme) => theme.palette.primary.main, ...ICON.DEFAULT_SIZE }}>
                <Avatar sx={{ bgcolor: 'primary.main', ...ICON.DEFAULT_SIZE }}>
                  <LogoutIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MenuList;
