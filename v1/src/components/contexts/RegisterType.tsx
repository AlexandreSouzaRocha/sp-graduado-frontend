import React from 'react';
import IRegisterTypeContext from '../../interfaces/IRegisterTypeContext';

const registerTypeeContextInitialValues: IRegisterTypeContext = {
  type: '',
  setType: (): void => {},
};
const RegisterTypeContext = React.createContext(registerTypeeContextInitialValues);

export default RegisterTypeContext;
