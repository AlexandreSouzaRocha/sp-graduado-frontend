import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';

import CONFIG from '../config';
import googleLogoImg from '../assets/google.png';

interface IGoogleLoginButtonProps {
  onSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure: (error: any) => void;
}

const GoogleLoginButton = (props: IGoogleLoginButtonProps): JSX.Element => {
  const { onSuccess, onFailure } = props;

  return (
    <GoogleLogin
      clientId={CONFIG.GOOGLE.APP_CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      theme="dark"
      buttonText="Login with Google"
      icon
      render={(renderProps) => {
        return (
          <>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={3.3}>
                <Tooltip title="Google Login">
                  <span>
                    <IconButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                      <img src={googleLogoImg} width={42} height={42} alt="" />
                    </IconButton>
                  </span>
                </Tooltip>
              </Grid>
            </Grid>
          </>
        );
      }}
    />
  );
};

export default GoogleLoginButton;
