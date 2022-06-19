import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';

import CONSTANTS from '../commons/Constants';
import Logo from './Logo';
import contactImg from '../assets/o-email.png';

const AboutUs = (): JSX.Element => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Card
          elevation={6}
          variant="elevation"
          sx={{
            minWidth: 200,
            bgcolor: (theme) => theme.palette.background.paper,
            m: 1,
            boxShadow: '10px 10px 35px #000',
            borderRadius: 3,
            border: 3,
            borderColor: (theme) => theme.palette.primary.main,
          }}
        >
          <CardHeader
            title="Quem somos?"
            align="center"
            titleTypographyProps={{ fontStyle: 'inherit', fontSize: '1.8em', fontWeight: 600, color: '#8000FF' }}
          />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 31.5 }}>
              <Typography
                sx={{ fontSize: '1.5em', fontWeight: 500, color: (theme) => theme.palette.text.secondary }}
                gutterBottom
              >
                Somos uma organização não governamental com o objetivo de proporcionar o encontro entre pessoas com o
                desejo de cursar o ensino superior em uma instituição privada e pessoas filantrópicas (os padrinhos),
                que se responsabilizam a pagar a mensalidade do aluno.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card
          elevation={6}
          variant="elevation"
          sx={{
            minWidth: 200,
            bgcolor: (theme) => theme.palette.background.paper,
            m: 1,
            boxShadow: '10px 10px 35px #000',
            borderRadius: 3,
            border: 3,
            borderColor: (theme) => theme.palette.primary.main,
          }}
        >
          <CardHeader
            title="Como funciona?"
            align="center"
            titleTypographyProps={{ fontStyle: 'inherit', fontSize: '1.8em', fontWeight: 600, color: '#8000FF' }}
          />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography
                sx={{ fontSize: '1.5em', fontWeight: 500, color: (theme) => theme.palette.text.secondary }}
                gutterBottom
              >
                Caso você deseje se inscrever no sistema como um padrinho para ajudar um aluno de baixa renda a se
                graduar no Ensino Superior, basta entrar em sua conta (ou criá-la, caso ainda não a possua), selecionar
                a aba de alunos disponíveis a serem apadrinhados e selecionar o aluno desejado. Apenas com isso você já
                dará início ao apadrinhamento ao aluno selecionado. Caso você deseje se inscrever no sistema como um
                aluno, basta você entrar em sua conta (ou criá-la, caso ainda não a possua), selecionar o curso na
                faculdade desejada e pronto, você já estará aguardando um padrinho!
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
