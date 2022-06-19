import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import ErrorOutlineOutlined from '@mui/icons-material/ErrorOutlineOutlined';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from 'react-router-dom';

import Utils from '../../../../commons/Utils';
import CONSTANTS from '../../../../commons/Constants';
import AlertDialog from '../../../AlertDialog';
import IDialogConfirmationProps from '../../../../interfaces/props/IDialogConfirmationProps';
import IGodfatherProfileContentProps from '../../../../interfaces/props/IGodfatherProfileContentProps';
import GodfatherEntity from '../../../../entities/Godfather';
import DateTime from '../../../../commons/DateTime';

const openDialogInitialvalues = { open: false, message: '', severity: 'info' };

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogConfirmation = (props: IDialogConfirmationProps): JSX.Element => {
  const { open, handleClose: handleCloseProps, id: godfatherId } = props;
  const [subimitting, setSubimitting] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(open);
  const [openDialogSuccess, setOpenDialogSuccess] = React.useState(openDialogInitialvalues);
  const navigate = useNavigate();

  const handleClose = (): void => {
    handleCloseProps();
    setSubimitting(false);
    setOpenDialog(false);
  };

  const handleCloseConfirmation = (): void => {
    setSubimitting(false);
    setOpenDialog(false);
    navigate(CONSTANTS.ROUTING.HOME, { replace: true });
  };

  const handleOnClickDeleteAccount = async (): Promise<void> => {
    try {
      setSubimitting(true);

      await GodfatherEntity.deleteAccount(Number(godfatherId));

      localStorage.removeItem('userInfoGodfather');
      localStorage.clear();

      setOpenDialog(false);
      setOpenDialogSuccess({
        severity: 'success',
        message: CONSTANTS.MESSAGES.BACKEND.DELETE_ACCOUNT.SUCCESS,
        open: true,
      });
    } catch (error) {
      setOpenDialogSuccess({
        severity: 'error',
        message: error.message,
        open: true,
      });
      throw error;
    } finally {
      setSubimitting(false);
    }
  };

  return (
    <>
      <Dialog open={openDialog} keepMounted onClose={handleClose} TransitionComponent={Transition}>
        <DialogTitle sx={{ color: '#929AA6', fontWeight: 500, fontSize: '1.1em' }}>
          Deseja realmente deletar sua conta?
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1, flexGrow: 1 }}>
            <Grid container direction="row" spacing={{ md: 1 }}>
              <Grid item xs={2}>
                <Avatar sx={{ mx: 1, width: 42, height: 42, bgcolor: 'primary.main' }}>
                  <ErrorOutlineOutlined />
                </Avatar>
              </Grid>
              <Grid item xs={8}>
                <Typography color="gray">Estamos deletando sua conta, você confirma esta ação?</Typography>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <LoadingButton loading={subimitting} disabled={subimitting} onClick={handleOnClickDeleteAccount}>
            {subimitting ? '' : 'Sim'}
          </LoadingButton>
          <LoadingButton onClick={handleClose}>Não</LoadingButton>
        </DialogActions>
      </Dialog>
      {openDialogSuccess.open && (
        <AlertDialog
          buttonText="Ok"
          onClose={handleCloseConfirmation}
          open={openDialogSuccess.open}
          textContent={openDialogSuccess.message}
          titleText="Deleção de Conta"
        />
      )}
    </>
  );
};

const GodfatherProfileContent = (props: IGodfatherProfileContentProps): JSX.Element => {
  const [subimitting, setSubimitting] = React.useState(false);
  const [openConfirmation, setOpenConfimation] = React.useState(false);

  const { godfatherInfo } = props;

  const getUserInfoFromStorage = (): any => {
    const dataGodfather = localStorage.getItem('userInfoGodfather');

    if (dataGodfather) return JSON.parse(dataGodfather);

    return {};
  };

  if (!godfatherInfo) {
    Object.assign(godfatherInfo, getUserInfoFromStorage());
  }

  const handleClose = (): void => {
    setOpenConfimation(false);
  };

  const handleOnClickDeleteAccount = async (): Promise<void> => {
    try {
      setSubimitting(true);
      await Utils.sleep(2000);
      setOpenConfimation(true);
    } finally {
      setSubimitting(false);
    }
  };
  return (
    <>
      <Container component="main" maxWidth="md" color="primary">
        <Card
          variant="outlined"
          sx={{
            borderRadius: 3,
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ width: 100, height: 100 }}>
                <Typography variant="h3">{String(godfatherInfo.name).substring(0, 1).toUpperCase()}</Typography>
              </Avatar>
            }
            title={
              <Typography variant="subtitle1" color="primary" fontSize="1.5em">
                {String(godfatherInfo.name)}
              </Typography>
            }
            subheader={
              <Typography variant="subtitle1" color="text.secondary" fontSize="1.5em">
                {String(godfatherInfo.email)}
              </Typography>
            }
          />
          <CardContent>
            <Grid container direction="column" spacing={4} sx={{ alignItems: 'center', ml: 3 }}>
              <Grid item xs={8}>
                <Grid container sx={{ mb: 2 }}>
                  <Grid item xs={5}>
                    <Typography
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontStyle: 'inherit',
                        fontSize: '1.3em',
                        fontWeight: 400,
                        letterSpacing: -1,
                      }}
                    >
                      Nome:
                    </Typography>
                    <Grid item>
                      <Typography
                        sx={{
                          mt: -2.3,
                          color: (theme) => theme.palette.text.secondary,
                          fontStyle: 'inherit',
                          fontSize: '1.3em',
                          fontWeight: 400,
                          letterSpacing: -1,
                        }}
                      >
                        {godfatherInfo.name}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontStyle: 'inherit',
                        fontSize: '1.3em',
                        fontWeight: 400,
                        letterSpacing: -1,
                      }}
                    >
                      Email:
                    </Typography>
                    <Grid item>
                      <Typography
                        sx={{
                          mt: -2.3,
                          color: (theme) => theme.palette.text.secondary,
                          fontStyle: 'inherit',
                          fontSize: '1.3em',
                          fontWeight: 400,
                          letterSpacing: -1,
                        }}
                      >
                        {godfatherInfo.email}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontStyle: 'inherit',
                        fontSize: '1.3em',
                        fontWeight: 400,
                        letterSpacing: -1,
                      }}
                    >
                      CPF:
                    </Typography>
                    <Grid item>
                      <Typography
                        sx={{
                          mt: -2.3,
                          color: (theme) => theme.palette.text.secondary,
                          fontStyle: 'inherit',
                          fontSize: '1.3em',
                          fontWeight: 400,
                          letterSpacing: -1,
                        }}
                      >
                        {godfatherInfo.document}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontStyle: 'inherit',
                        fontSize: '1.3em',
                        fontWeight: 400,
                        letterSpacing: -1,
                      }}
                    >
                      Data de Nascimento:
                    </Typography>
                    <Grid item>
                      <Typography
                        sx={{
                          mt: -2.3,
                          color: (theme) => theme.palette.text.secondary,
                          fontStyle: 'inherit',
                          fontSize: '1.3em',
                          fontWeight: 400,
                          letterSpacing: -1,
                        }}
                      >
                        {DateTime.toFormat(godfatherInfo.birth_date, CONSTANTS.DATE.US, CONSTANTS.DATE.BRAZILIAN)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontStyle: 'inherit',
                        fontSize: '1.3em',
                        fontWeight: 400,
                        letterSpacing: -1,
                      }}
                    >
                      Telefone:
                    </Typography>
                    <Grid item>
                      <Typography
                        sx={{
                          mt: -2.3,
                          color: (theme) => theme.palette.text.secondary,
                          fontStyle: 'inherit',
                          fontSize: '1.3em',
                          fontWeight: 400,
                          letterSpacing: -1,
                        }}
                      >
                        {godfatherInfo.phone}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      gutterBottom
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontStyle: 'inherit',
                        fontSize: '1.3em',
                        fontWeight: 400,
                        letterSpacing: -1,
                      }}
                    >
                      Renda Mensal:
                    </Typography>
                    <Grid item>
                      <Typography
                        sx={{
                          mt: -2.3,
                          color: (theme) => theme.palette.text.secondary,
                          fontStyle: 'inherit',
                          fontSize: '1.3em',
                          fontWeight: 400,
                          letterSpacing: -1,
                        }}
                      >
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(godfatherInfo.income)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <LoadingButton
              fullWidth
              variant="outlined"
              loading={subimitting}
              disabled={subimitting}
              onClick={handleOnClickDeleteAccount}
              sx={{
                mt: 3,
                mb: 2,
                background: (theme) => (theme.palette.mode === 'dark' ? '#000' : theme.palette.background.paper),
                height: 42,
                color: (theme) => theme.palette.primary.main,
                borderColor: (theme) => theme.palette.primary.main,
                '&:hover': {
                  color: '#E66FA5',
                  borderColor: '#E66FA5',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                  fontStyle: 'inherit',
                  fontWeight: '500',
                  color: (theme) => theme.palette.primary.main,
                  '&:hover': {
                    color: '#E66FA5',
                  },
                }}
              >
                {subimitting ? '' : 'Deletar Conta'}
              </Typography>
            </LoadingButton>
          </CardContent>
        </Card>
        {openConfirmation && (
          <DialogConfirmation open={openConfirmation} handleClose={handleClose} id={Number(godfatherInfo.id)} />
        )}
      </Container>
    </>
  );
};

export default GodfatherProfileContent;
