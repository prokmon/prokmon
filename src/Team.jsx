import { Container, Typography,  Grid, Card, Box, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LucyImage from './assets/Lucy.png'; 
import HudsonImage from './assets/Hudson.png';
import ElliotImage from './assets/Elliot.png';
import DarrylImage from './assets/Darryl.png';
import DianaImage from './assets/Diana.png';
// import SuperToroid from './assets/SuperToroid.png'; // Make sure the path is correct


function Team() {
  
    return (
        <Container id="team-section" 
        sx= {{
            paddingY: '80px', 
            textAlign: 'center', 
            marginBottom: '50px',
            marginTop: '0px',
            maxWidth: "md"
        }}
        >
            <Typography variant='h5' component='h1' yeah
                sx={{
                    textAlign: 'center', 
                    marginTop: '50px', 
                    marginBottom: '60px', 
                    fontWeight: 'bold', 
                    fontSize: '50px'}}
                    > 
                Meet Our Team 
            </Typography>
          
                <Grid container spacing={4} justifyContent="center" style={{ display: 'flex' }}>

                    {/* First person */}
                    <Grid item xs={6} sm={4}  lg={2} >
                        <Card sx={{ 
                            border: '1px solid white', 
                            backgroundColor: 'black', 
                            borderRadius: '10px', 
                            color: 'white', 
                            //boxShadow: '0px 0px 12px #bb99cc',
                            padding: '1.1rem', 
                            width: { xs: '130px', sm: '150px' }, 
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
                                src={LucyImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px',
                                    display: 'block', 
                                    marginLeft: 'auto', 
                                    marginRight: 'auto', 
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom 
                                sx= {{
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                }}
                                >
                                    Lucy Wu
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/lwu15" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/in/lwu15/" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of first person */}

                    {/* Second person */}
                    <Grid item xs={6} sm={4}  lg={2}>
                        <Card sx={{ 
                            border: '1px solid white', 
                            backgroundColor: 'black', 
                            borderRadius: '10px', 
                            color: 'white', 
                            //boxShadow: '0px 0px 12px #bb99cc',
                            padding: '1.1rem', 
                            width: { xs: '130px', sm: '150px' }, 
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
                                src={HudsonImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px',
                                    display: 'block', 
                                    marginLeft: 'auto', 
                                    marginRight: 'auto', 
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                }}
                                >
                                    Hudson McLane
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/redferret1" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                     <IconButton component="a" href="https://www.linkedin.com/in/hudson-mclane-7743792a8/" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton> 
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of second person */}

                    {/* start of third person */}
                    <Grid item xs={6} sm={4}  lg={2}>
                        <Card sx={{ 
                            border: '1px solid white', 
                            backgroundColor: 'black', 
                            borderRadius: '10px', 
                            color: 'white', 
                            //boxShadow: '0px 0px 12px #bb99cc',
                            padding: '1.1rem', 
                            width: { xs: '130px', sm: '150px' }, 
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
                                src={ElliotImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px',
                                    display: 'block', 
                                    marginLeft: 'auto', 
                                    marginRight: 'auto', 
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px',
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                }}
                                >
                                    Elliot Cho
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/echochs1" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/in/elliot-hs-cho/" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of third person */}

                    {/* start of fourth person */}
                    <Grid item xs={6} sm={4}  lg={2}>
                        <Card sx={{ 
                            border: '1px solid white', 
                            backgroundColor: 'black', 
                            borderRadius: '10px', 
                            color: 'white', 
                            //boxShadow: '0px 0px 12px #6874E8',
                            padding: '1.1rem', 
                            width: { xs: '130px', sm: '150px' }, 
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
                                src={DarrylImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px',
                                    display: 'block', 
                                    marginLeft: 'auto', 
                                    marginRight: 'auto', 
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                }}
                                
                                >
                                    Darryl Joo
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/hjdjoo" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    {/* <IconButton component="a" href="https://github.com/hjdjoo" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton> */}
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of fourth person */}

                    {/* start of fifth person */}
                    <Grid item xs={6} sm={4}  lg={2}>
                        <Card sx={{  
                            border: '1px solid white', 
                            backgroundColor: 'black', 
                            borderRadius: '10px', 
                            color: 'white', 
                            //boxShadow: '0px 0px 12px #6874E8',
                            padding: '1.1rem', 
                            width: { xs: '130px', sm: '150px' },  
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
                                src={DianaImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px',
                                    display: 'block', 
                                    marginLeft: 'auto', 
                                    marginRight: 'auto', 
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    textAlign: 'center',
                                }}
                                >
                                    Diana Alokhina
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/dianalokada" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/in/diana-alokhina/" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of fifth person */}

                    </Grid>
            </Container>
    )
}

export default Team;