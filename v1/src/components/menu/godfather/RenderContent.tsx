import React from 'react';

import DrawerContext from '../../contexts/Drawer';
import GraduateAssociatedContent from './content/GraduatesAssociated';
import GraduateUnAssociatedContent from './content/GraduateUnAssociated';
import GodfatherProfileContent from './content/Profile';

const GodfatherMenuRenderContent = (): JSX.Element => {
  const { currentContent } = React.useContext(DrawerContext);

  const getUserInfoFromStorage = (): any => {
    const dataGodfather = localStorage.getItem('userInfoGodfather');

    if (dataGodfather) return JSON.parse(dataGodfather);

    return {};
  };

  switch (currentContent) {
    case 0:
      return <GraduateAssociatedContent godfatherInfo={{ ...getUserInfoFromStorage() }} />;
    case 1:
      return <GodfatherProfileContent godfatherInfo={{ ...getUserInfoFromStorage() }} />;
    case 2:
      return <GraduateUnAssociatedContent godfatherInfo={{ ...getUserInfoFromStorage() }} />;
    default:
      return <h6>Unexpected Error</h6>;
  }
};

export default GodfatherMenuRenderContent;
