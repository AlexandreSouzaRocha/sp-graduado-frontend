import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CONSTANTS from '../commons/Constants';
import Logo from './Logo';
import contactImg from '../assets/o-email.png';

const { CONTACTS } = CONSTANTS;

const ContactUs = (): JSX.Element => {
  return (
    <>
      <Grid container spacing={3} sx={{ alignItems: 'center' }}>
        {CONTACTS.map((contact: { email: string; name: string }) => (
          <Grid key={contact.email} item xs>
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
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Logo
                    width={32}
                    height={32}
                    textLogo={contact.name}
                    imageUrl={contactImg}
                    alt="https://www.freepik.com"
                    typographyStyles={{
                      color: (theme) => theme.palette.primary.main,
                      fontStyle: 'inherit',
                      fontSize: '1.5em',
                      fontWeight: 600,
                      my: -0.1,
                      mx: 1,
                      letterSpacing: -1,
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    sx={{ fontSize: '1.8em', fontWeight: 500, color: (theme) => theme.palette.text.secondary }}
                    gutterBottom
                  >
                    {contact.email}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ContactUs;
