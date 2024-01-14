import React from 'react';
import { Container, Typography, Grid, Stack, Button, Box } from '@mui/material';
import logoImage from './assets/logo-6.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

function About() {
  const theme = useTheme();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Container
      id="about-section"
      sx={{ marginBottom: '30px', marginTop: '40px' }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={6} sx={{ textAlign: { xs: 'left', sm: 'center' } }}>
          <Stack spacing={1}>
            <Stack spacing={2}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  textAlign: 'left',
                  fontWeight: 'bold',
                  fontSize: '3rem', 
                }}
              >
                KMon
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'left',
                  fontWeight: 'bold',
                  fontSize: '1.5rem', 
                  color: '#',
                }}
              >
                Open-source monitoring tool for Apache Kafka
              </Typography>
            </Stack>

            <>

            <Typography variant="h6" sx={{ textAlign: 'left', color: '#aaa', fontSize: '1.2rem' }}>
              Fully compatible with KRaft mode, KMon provides a user-friendly and intuitive GUI for monitoring essential health metrics of Kafka clusters.
            </Typography>

              <Typography
                variant="h6"
                sx={{ textAlign: 'left', color: '#aaa' }}
              >
                We integrate customizable metric visualizations and alerts to
                streamline monitoring processes, enabling developers to
                proactively optimize Kafka performance and resolve issues.
              </Typography>
            </>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { xs: 'flex-start', sm: 'flex-start' },
              alignItems: 'flex-start',
              gap: { xs: '5px', md: '10px' },
              marginTop: '30px',
              width: '100%',
            }}
          >
            {/* <Button
              onClick={() => scrollTo('features-section')}
              disableRipple
              disableElevation
              variant="contained"
              sx={{
                backgroundColor: '#6874E8',
                color: 'white',
                borderRadius: '20px',
                padding: '10px 10px',
                width: { xs: '100%', md: '180px' }, 
                maxWidth: '180px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#5563DF',
                },
                [theme.breakpoints.up('md')]: {
                  width: '180px',
                },
              }}
            >
              Explore
              <ArrowForwardIosIcon />
            </Button> */}

            {/* <Button
              //onClick={() => scrollTo("features-section")}
              disableRipple
              disableElevation
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '20px',
                padding: '10px 10px',
                width: { xs: '100%', md: '180px' }, 
                maxWidth: '180px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'white',
                },
                [theme.breakpoints.up('md')]: {
                  width: '180px',
                },
              }}
            >
              Get Started
              <ArrowForwardIosIcon />
            </Button> */}
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <img
            src={logoImage}
            alt="Logo"
            style={{
              width: '100%', 
              maxWidth: '200px', 
              height: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
