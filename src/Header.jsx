import React from 'react';
import {
  Stack, 
  Button, 
  IconButton, 
  Typography, 
  Container, 
  Menu, 
  MenuItem, 
  Box,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import logoImage from './assets/logo-6.png';
import { Link } from 'react-scroll'
import { useBreakpoint } from './BreakpointContext.jsx';

function Header() {

  const { isMobile } = useBreakpoint();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    document.body.classList.toggle('body-noscroll');
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // For mobile view
  const mobileHeader = (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '30px'}}>

        <Box  sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

          <Stack spacing={1} direction='row' alignItems='center'>
            <Typography variant='h6'>KMon</Typography>
            <img src={logoImage} alt="Logo" style = {{maxWidth: '13%', height: 'auto'}}/>
          </Stack>

          <Stack direction='row' alignItems='center' spacing={1}
          sx={{
            right: 0, 
            top: '30px', 
            marginRight: '0px' 
          }}
          >
        
      <Button
        disableRipple 
        disableElevation
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon  />
      </Button>
      <Menu 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
          <MenuItem disableRipple disableElevation onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="features-section" spy={true} smooth={true} offset={-70} duration={500}>
          <MenuItem  disableRipple disableElevation onClick={handleClose}>Features</MenuItem>
        </Link>
        <Link to="demo-section" spy={true} smooth={true} offset={-70} duration={500}>
          <MenuItem disableRipple disableElevation onClick={handleClose}>Demo</MenuItem>
        </Link>
        <Link to="team-section" spy={true} smooth={true} offset={-70} duration={500}>
          <MenuItem disableRipple disableElevation onClick={handleClose}>Team</MenuItem>
        </Link>
        <MenuItem disableRipple disableElevation onClick={handleClose}>
          <IconButton component="a" href="https://github.com/oslabs-beta/KMon" target="_blank" rel="noopener noreferrer" disableRipple disableElevation><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
        </MenuItem>
        <MenuItem disableRipple disableElevation onClick={handleClose}>
          <IconButton component="a" href="https://www.linkedin.com/company/kafkamonitoring" target="_blank" rel="noopener noreferrer" disableRipple disableElevation ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
        </MenuItem>
      </Menu>
      </Stack>
      </Box>
    </Container>
  )


     // For desktop/tablet view
     const defaultHeader = (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', padding: '30px'}}>

        <Box  sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

          <Stack spacing={1} direction='row' alignItems='center'>
            <Typography variant='h6'>KMon</Typography>
            <img src={logoImage} alt="Logo" width="40px" height="40px" />
          </Stack>

          <Stack  direction='row' alignItems='center' spacing={1}
          sx={{
            right: 0, 
            top: '30px', 
            marginRight: '20px' 
          }}
          >
            <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Home</Button>
            </Link>
            <Link to="features-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Features</Button>
            </Link>
            {/* <Link to="demo-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Demo</Button>
            </Link> */}
            <Link to="team-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Team</Button>
            </Link>
            <IconButton component="a" href="https://github.com/oslabs-beta/KMon" target="_blank" rel="noopener noreferrer" disableRipple disableElevation><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
            <IconButton component="a" href="https://www.linkedin.com/company/kmon-dev" target="_blank" rel="noopener noreferrer" disableRipple disableElevation ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
          </Stack>
        </Box>
      </Container>
     )

     if (isMobile) {
      return mobileHeader;
    } else {
      return defaultHeader;
    }
  }


export default Header;
