import React from 'react';

import MaterialLayout from '../components/MaterialLayout';
import ForgotPassword from '../components/ForgotPassword';
import ErrorBoundary from '../components/error/ErrorBoundary';

const ForgotPasswordPage = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <MaterialLayout>
        <ForgotPassword />
      </MaterialLayout>
    </ErrorBoundary>
  );
};

export default ForgotPasswordPage;
