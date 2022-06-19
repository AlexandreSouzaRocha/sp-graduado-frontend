import React from 'react';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ErrorOutlineOutlined from '@mui/icons-material/ErrorOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TransitionProps } from '@mui/material/transitions';
import IAlertDialogProps from '../interfaces/props/IAlertDialogProps';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = (props: IAlertDialogProps): JSX.Element => {
  const { open, textContent, titleText, buttonText, onClose: handleOnClose } = props;

  return (
    <Dialog open={open} keepMounted onClose={handleOnClose} TransitionComponent={Transition}>
      <DialogTitle sx={{ color: '#929AA6', fontWeight: 500, fontSize: '1.1em' }}>{titleText}</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 1, flexGrow: 1 }}>
          <Grid container direction="row" spacing={{ md: 1 }}>
            <Grid item xs={2}>
              <Avatar sx={{ mx: 1, width: 42, height: 42, bgcolor: 'primary.main' }}>
                <ErrorOutlineOutlined />
              </Avatar>
            </Grid>
            <Grid item xs={8}>
              <Typography color="gray">{textContent}</Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>{buttonText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
