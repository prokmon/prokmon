import React from 'react';
import { Container, Typography, Grid, Stack, Card, CardMedia, Button } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function Demo() {
  
    return (
        <Container id="demo-section"
        sx= {{
            //backgroundColor: '#bd5df1',
            textAlign: 'center', 
            marginBottom: '0px',
            marginTop: '50px',
            maxWidth: "md",
        }}
        >
            <Typography variant='h5' component='h1' 
            sx={{
                textAlign: 'center', 
                marginTop: '0px', 
                marginBottom: '40px', 
                fontWeight: 'bold', 
                fontSize: '50px'}}
                > 
                See KMon in Action 
            </Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">

                {/* first grid */}
                <Grid item xs={6} sx={{ textAlign: 'center' }}> 

                    <Stack spacing={2} 

                    sx={{ 
                        width: '100%', 
                        alignItems: { xs: 'center', md: 'center' },
                        marginBottom: '50px'
                    }}
                    >
                    <Typography >Click to watch</Typography>

                    <Button disableRipple disableElevation variant='contained' 
                        sx={{
                        marginTop: '30px',
                        marginBottom: '30px', 
                        backgroundColor: '#6874E8',
                        color: 'white',
                        borderRadius: '20px', 
                        padding: '10px 5vw',
                        width: '80%',
                        maxWidth: '180px',
                        //boxShadow: '0px 0px 14px #bb99cc',
                        transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#5563DF',
                        },
                        }}
                        >
                         Demo 
                        < TrendingFlatIcon sx={{marginLeft: '8px'}}/>
                    </Button>
                    
                    </Stack>

                </Grid>

                {/* second grid */}
                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <Card sx={{ m: 0, maxWidth: '100%', overflow: 'hidden' }}>
                        <CardMedia component="video" sx={{ width: '100%', height: 'auto' }} controls>
                            <source src="path_to_your_video.mp4" type="video/mp4"/>
                        </CardMedia>
                            
                    </Card>
                </Grid>

            </Grid>
        </ Container>
    )
}

export default Demo;