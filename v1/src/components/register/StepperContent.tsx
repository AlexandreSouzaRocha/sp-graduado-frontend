import React from 'react';
import { useFormikContext } from 'formik';

import GraduateForm from './graduate/GraduateForm';
import GodfatherForm from './godfather/GodfatherForm';
import RegisterType from './RegisterType';
import TermsAndConditions from './TermsAndConditions';
import GraduateConfirmRegistration from './graduate/GraduateConfirmRegistration';
import GodfatherConfirmRegistration from './godfather/GodfatherConfirmRegistration';
import CONSTANTS from '../../commons/Constants';
import IPerson from '../../interfaces/IPerson';
import ErrorFallback from '../error/ErrorFallback';

const StepperContent = ({ currentStep }: { currentStep: number }): JSX.Element => {
  const formik = useFormikContext<IPerson>();

  const termsAndCoditions: string =
    formik.values?.type === 'GODFATHER' ? CONSTANTS.TERMS_CONDITIONS.GODFATHER : CONSTANTS.TERMS_CONDITIONS.GRADUATE;

  switch (currentStep) {
    case 0:
      return <RegisterType />;
    case 1:
      return formik.values?.type === 'GRADUATE' ? <GraduateForm /> : <GodfatherForm />;
    case 2:
      return <TermsAndConditions terms={String(termsAndCoditions)} />;
    case 3:
      return formik.values?.type === 'GRADUATE' ? <GraduateConfirmRegistration /> : <GodfatherConfirmRegistration />;
    default:
      return <ErrorFallback />;
  }
};

export default StepperContent;
