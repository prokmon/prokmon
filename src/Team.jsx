import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DianaImage from './assets/Diana.png';
import DarrylImage from './assets/Darryl.jpeg';
import ElliotImage from './assets/Elliot.jpeg';
import HudsonImage from './assets/Hudson.jpeg';
import LucyImage from './assets/Lucy.png';

const teamMembers = [
  {
    name: 'Diana Alokhina',
    image: DianaImage,
    github: 'https://github.com/dianalokada',
    linkedin: 'https://www.linkedin.com/in/diana-alokhina',
  },
  {
    name: 'Darryl Joo',
    image: DarrylImage,
    github: 'https://github.com/hjdjoo',
    linkedin: 'https://www.linkedin.com/in/darryljoo',
  },
  {
    name: 'Elliot Cho',
    image: ElliotImage,
    github: 'https://github.com/echochs1',
    linkedin: 'https://www.linkedin.com/in/elliot-hs-cho',
  },
  {
    name: 'Hudson McLane',
    image: HudsonImage,
    github: 'https://github.com/redferret1',
    linkedin: 'https://www.linkedin.com/in/hudson-mclane-7743792a8',
  },
  {
    name: 'Lucy Wu',
    image: LucyImage,
    github: 'https://github.com/lwu15',
    linkedin: 'https://www.linkedin.com/in/lwu15',
  },
];

function Team() {
  return (
    <Container
      id="team-section"
      sx={{
        paddingY: '80px',
        textAlign: 'center',
        marginBottom: '50px',
        marginTop: '0px',
        maxWidth: 'md',
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        yeah
        sx={{
          textAlign: 'center',
          marginTop: '50px',
          marginBottom: '60px',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        Meet Our Team
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{ display: 'flex' }}
      >
        {teamMembers.map((member, index) => (
          <Grid key={index} item xs={6} sm={4} lg={2}>
            <Card
              sx={{
                border: '1px solid white',
                backgroundColor: 'black',
                borderRadius: '10px',
                color: 'white',
                padding: '1.1rem',
                width: { xs: '150px', sm: '170px' },
                height: '230px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  animation: 'pulse 2.5s infinite ease-in-out',
                },
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.05)',
                  },
                  '100%': {
                    transform: 'scale()',
                  },
                },
              }}
            >
              <img
                src={member.image}
                alt="pic"
                style={{
                  width: '80%',
                  height: 'auto',
                  borderRadius: '100px',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
              <Box
                sx={{
                  paddingY: '20px',
                  paddingX: '16px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontSize: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {member.name}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <IconButton
                    component="a"
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    disableRipple
                    disableElevation
                    sx={{ padding: '0px', margin: '0 3px' }}
                  >
                    <GitHubIcon sx={{ width: '30px', height: '30px' }} />
                  </IconButton>
                  {member.linkedin && (
                    <IconButton
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      disableRipple
                      disableElevation
                      sx={{ padding: '0px', margin: '0 3px' }}
                    >
                      <LinkedInIcon sx={{ width: '30px', height: '30px' }} />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Team;