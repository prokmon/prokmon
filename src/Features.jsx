import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import HubIcon from '@mui/icons-material/Hub';

function Features() {
  return (
    <Container
      id="features-section"
      sx={{
        paddingY: '80px',
        textAlign: 'center',
        marginTop: '30px',
        marginBottom: '30px',
        maxWidth: 'md',
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '60px',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        Features
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ display: 'flex' }}
      >
        {/* First feature */}
        <Grid item xs={6} sm={4}>
          <Card
            sx={{
              flexGrow: 1,
              border: '1px solid white',
              backgroundColor: 'black',
              borderRadius: '10px',
              color: 'white',
              padding: { xs: '1rem', sm: '2rem' },
              minWidth: { xs: '100px', sm: '150px' },
              minHeight: '120px',
              height: { xs: '250px', sm: '200px' },
              '&:hover': {
                animation: 'bounce 2s infinite',
              },
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                }}
              >
                Cluster Management
              </Typography>
              <HubIcon
                sx={{
                  marginBottom: '15px',
                  width: '40px',
                  height: '40px',
                  color: '#6874E8',
                }}
              />
              <Typography variant="body2">
                Effortlessly manage your Kafka Cluster
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Second feature */}

        <Grid item xs={6} sm={4}>
          <Card
            sx={{
              flexGrow: 1,
              border: '1px solid white',
              backgroundColor: 'black',
              borderRadius: '10px',
              color: 'white',
              padding: { xs: '1rem', sm: '2rem' },
              minWidth: { xs: '100px', sm: '150px' },
              minHeight: '120px',
              height: { xs: '250px', sm: '200px' },
              '&:hover': {
                animation: 'bounce 2s infinite',
              },
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                }}
              >
                Customizable Metrics
              </Typography>
              <SignalCellularAltIcon
                sx={{
                  marginBottom: '15px',
                  width: '45px',
                  height: '45px',
                  color: '#6874E8',
                }}
              />
              <Typography variant="body2">
                Tailor which metrics you want to monitor
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third feature */}
        <Grid item xs={6} sm={4}>
          <Card
            sx={{
              flexGrow: 1,
              border: '1px solid white',
              backgroundColor: 'black',
              borderRadius: '10px',
              color: 'white',
              padding: { xs: '1rem', sm: '2rem' },
              minWidth: { xs: '100px', sm: '150px' },
              minHeight: '120px',
              height: { xs: '250px', sm: '200px' },
              '&:hover': {
                animation: 'bounce 2s infinite',
              },
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                }}
              >
                Configurable Alerts
              </Typography>
              <NotificationsActiveIcon
                sx={{
                  marginBottom: '15px',
                  width: '40px',
                  height: '40px',
                  color: '#6874E8',
                }}
              />
              <Typography variant="body2">
                Stay informed about critical metrics instantly
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Fourth feature  */}
        <Grid item xs={6} sm={4}>
          <Card
            sx={{
              flexGrow: 1,
              border: '1px solid white',
              backgroundColor: 'black',
              borderRadius: '10px',
              color: 'white',
              padding: { xs: '1rem', sm: '2rem' },
              minWidth: { xs: '100px', sm: '150px' },
              minHeight: '120px',
              height: { xs: '250px', sm: '200px' },
              '&:hover': {
                animation: 'bounce 2s infinite',
              },
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                }}
              >
                Real-Time Metrics
              </Typography>
              <TimelineIcon
                sx={{
                  marginBottom: '15px',
                  width: '40px',
                  height: '40px',
                  color: '#6874E8',
                }}
              />
              <Typography variant="body2">
                Monitor crucial metrics in real-time
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Fifth feature */}
        <Grid item xs={6} sm={4}>
          <Card
            sx={{
              flexGrow: 1,
              border: '1px solid white',
              backgroundColor: 'black',
              borderRadius: '10px',
              color: 'white',
              padding: { xs: '1rem', sm: '2rem' },
              minWidth: { xs: '100px', sm: '150px' },
              minHeight: '120px',
              height: { xs: '250px', sm: '200px' },
              '&:hover': {
                animation: 'bounce 2s infinite',
              },
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                }}
              >
                KRaft Compatibility
              </Typography>
              <ViewCompactIcon
                sx={{
                  marginBottom: '15px',
                  width: '40px',
                  height: '40px',
                  color: '#6874E8',
                }}
              />
              <Typography variant="body2">
                Fully compatible with KRaft mode
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sixth feature */}
        <Grid item xs={6} sm={4}>
          <Card
            sx={{
              flexGrow: 1,
              border: '1px solid white',
              backgroundColor: 'black',
              borderRadius: '10px',
              color: 'white',
              padding: { xs: '1rem', sm: '2rem' },
              minWidth: { xs: '100px', sm: '150px' },
              minHeight: '120px',
              height: { xs: '250px', sm: '200px' },
              '&:hover': {
                animation: 'bounce 2s infinite',
              },
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                }}
              >
                Effortless Setup
              </Typography>
              <SettingsApplicationsIcon
                sx={{
                  marginBottom: '15px',
                  width: '40px',
                  height: '40px',
                  color: '#6874E8',
                }}
              />
              <Typography variant="body2">
                Connect to a cluster and start using the tool in seconds
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button
        component="a"
        href="https://medium.com/@hjdjoo/kmon-kraft-compatible-kafka-monitoring-cc07dc0f3d04"
        disableRipple
        disableElevation
        variant="contained"
        sx={{
          marginTop: '50px',
          backgroundColor: '#6874E8',
          color: 'white',
          borderRadius: '20px',
          padding: '10px 30px',
          width: '300px',
          '&:hover': {
            backgroundColor: '#5563DF',
          },
        }}
      >
        Read About Us on Medium
      </Button>
    </Container>
  );
}

export default Features;