import React from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import MenuList from './MenuList';
import Header from './Header';
import MenuGodfatherAppBar from './AppBar';
import DrawerContext from '../../contexts/Drawer';
import GodfatherMenuRenderContent from './RenderContent';

const GodafatherNavigationDrawer = (): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [currentContent, setCurrentContent] = React.useState(0);

  const getUserInfoFromStorage = (): any => {
    const dataGodfather = localStorage.getItem('userInfoGodfather');

    if (dataGodfather) return JSON.parse(dataGodfather);

    return {};
  };

  const toggleDrawer = (openDrawer: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(openDrawer);
  };

  return (
    <>
      <DrawerContext.Provider value={{ currentContent, setCurrentContent, openDrawer: open, setOpenDrawer: setOpen }}>
        <Box sx={{ display: 'flex' }}>
          <MenuGodfatherAppBar godfatherInfo={{ ...getUserInfoFromStorage() }} />
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              color: (theme) => theme.palette.primary.main,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
            }}
          >
            <Header godfatherInfo={{ ...getUserInfoFromStorage() }} />
            <Divider sx={{ m: 0 }} />
            <MenuList />
          </Drawer>
        </Box>
        <Container component="main" maxWidth="xl" sx={{ mt: 5 }}>
          <GodfatherMenuRenderContent />
        </Container>
      </DrawerContext.Provider>
    </>
  );
};

export default GodafatherNavigationDrawer;
