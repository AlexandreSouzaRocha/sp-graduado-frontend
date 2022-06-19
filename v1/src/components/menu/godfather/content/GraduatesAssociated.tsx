import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { AlertColor } from '@mui/material';

import IAssociatedGraduatesPagination from '../../../../interfaces/IAssociatedGraduatesPagination';
import IGodfatherProfileContentProps from '../../../../interfaces/props/IGodfatherProfileContentProps';
import GraduateEntity from '../../../../entities/Graduate';

const openDialogInitialvalues = { open: false, message: '', severity: 'info' };

const associatedGraduatesInitialValues: IAssociatedGraduatesPagination = {
  pagination: {
    previousPage: 0 || null,
    currentPage: 0,
    nextPage: 0 || null,
    lastPage: false,
    totalPages: 0,
    totalItems: 0,
    maxItemsPerPage: 0,
    totalItemsPage: 0,
    items: [],
  },
};

const NoGraduatesFoundContent = (): JSX.Element => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontStyle: 'italic',
            fontSize: '3em',
            fontWeight: 400,
            mx: 20,
            my: 1,
            marginTop: 15,
            letterSpacing: -1,
          }}
        >
          Você não possui nenhum apadrinhamento no momento!
        </Typography>
      </Box>
    </>
  );
};

const GraduateAssociatedContent = (props: IGodfatherProfileContentProps): JSX.Element => {
  const [associatedGraduates, setAssociatedGraduates] = React.useState(associatedGraduatesInitialValues);
  const [page, setPage] = React.useState(1);
  const [openDialog, setOpenDialog] = React.useState(openDialogInitialvalues);

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
    setOpenDialog(openDialogInitialvalues);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, nextPage: number): void => {
    setPage(nextPage);
  };

  const loadAssociatedGraduates = async (godfatherId: number): Promise<void> => {
    try {
      const { data } = await GraduateEntity.getAllPatronized(godfatherId, page);

      setAssociatedGraduates({
        pagination: {
          previousPage: data.previousPage,
          currentPage: data.currentPage,
          nextPage: data.nextPage,
          lastPage: data.last,
          totalPages: data.totalPages,
          totalItems: data.totalItems,
          maxItemsPerPage: data.maxItemsPerPage,
          totalItemsPage: data.totalItemsPage,
          items: data.items,
        },
      });
    } catch (error) {
      setAssociatedGraduates(associatedGraduatesInitialValues);
    }
  };

  React.useEffect(() => {
    if (godfatherInfo?.id) {
      loadAssociatedGraduates(Number(godfatherInfo.id));
    }
  }, [page]);

  return (
    <>
      {!associatedGraduates.pagination.items.length ? (
        <NoGraduatesFoundContent />
      ) : (
        <>
          <Container maxWidth="lg" sx={{ mb: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography
                sx={{
                  flexGrow: 1,
                  color: (theme) => theme.palette.primary.main,
                  fontStyle: 'italic',
                  fontSize: '3.5em',
                  fontWeight: 400,
                  mx: 1,
                  my: 1,
                  letterSpacing: -1,
                }}
              >
                Graduandos apoiados por você! : )
              </Typography>
            </Box>
          </Container>
          <Grid container spacing={3}>
            {associatedGraduates.pagination.items.map((graduate: any) => (
              <Grid item key={`${graduate.id}-${graduate.email}-${graduate.phone}`}>
                <Card
                  elevation={6}
                  variant="elevation"
                  sx={{
                    maxWidth: 345,
                    borderRadius: 3,
                  }}
                >
                  <CardHeader
                    avatar={<Avatar>{String(graduate.name).substring(0, 1)}</Avatar>}
                    title={graduate.name}
                    subheader={`${graduate.email}`}
                  />
                  <CardContent>
                    <Typography variant="body1" color="text.primary">
                      {graduate.description}
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Grid container spacing={2} alignContent="center">
                      <Grid item xs={4}>
                        <Typography variant="body2" color="text.secondary">
                          {graduate.phone}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="primary.dark">
                          {Intl.NumberFormat('pt-BR', {
                            maximumSignificantDigits: 2,
                            style: 'currency',
                            currency: 'BRL',
                          }).format(graduate.income)}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="body2" color="text.secondary">
                          {graduate.birth_date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Pagination
          variant="outlined"
          count={associatedGraduates.pagination.totalPages}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          onChange={handlePageChange}
          color="primary"
          sx={{
            marginTop: 10,
          }}
        />
      </Box>
      {openDialog.open && (
        <Snackbar open={openDialog.open} autoHideDuration={5000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={openDialog.severity as AlertColor}
            sx={{ width: '100%', filter: 'saturate(1.2)' }}
          >
            {openDialog.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default GraduateAssociatedContent;
