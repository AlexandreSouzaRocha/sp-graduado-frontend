import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MaterialLayout from '../components/MaterialLayout';
import CONSTANTS from '../commons/Constants';
import AlertDialog from '../components/AlertDialog';
import SnackBar from '../components/SnackBar';
import GraduateNavigationDrawer from '../components/menu/graduate/NavigationDrawer';
import ErrorBoundary from '../components/error/ErrorBoundary';

const GraduatePage = (): JSX.Element => {
  const [hasLoggedIn, setHasLoggedIn] = React.useState(true);
  const { state: locationState }: any = useLocation();
  const navigation = useNavigate();

  const isLoggedIn = (): boolean => {
    return !!locationState?.userInfo?.id;
  };

  const isOnStorage = (): boolean => {
    return !!localStorage.getItem('userInfoGraduate');
  };

  const persistUserInfoOnLocalStorage = (): void => {
    if (locationState?.userInfo?.id && !isOnStorage()) {
      localStorage.setItem('userInfoGraduate', JSON.stringify(locationState?.userInfo));
    }
  };

  React.useEffect(() => {
    if (!isLoggedIn() && !isOnStorage()) {
      setHasLoggedIn(false);
    } else {
      persistUserInfoOnLocalStorage();
    }
  }, []);

  const handleOnCloseAlertDialog = (): void => {
    localStorage.clear();
    navigation(CONSTANTS.ROUTING.HOME, { replace: true });
    setHasLoggedIn(true);
  };

  return (
    <ErrorBoundary>
      <MaterialLayout>
        {locationState?.hasOpen && (
          <SnackBar hasOpen={Boolean(locationState?.hasOpen)} severity="info" text="Login efetuado com sucesso!" />
        )}
        <GraduateNavigationDrawer />
        {!hasLoggedIn && (
          <AlertDialog
            buttonText="Fechar"
            open
            onClose={handleOnCloseAlertDialog}
            textContent="Você não está logado para acessar esta página!"
            titleText="Erro ao Acessar"
          />
        )}
      </MaterialLayout>
    </ErrorBoundary>
  );
};

export default GraduatePage;
