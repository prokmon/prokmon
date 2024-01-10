import { Container, Typography, Grid, Stack, Button, Box } from "@mui/material";
import logoImage from "./assets/logo-6.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";

function About() {
  const theme = useTheme();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Container
      id="about-section"
      sx={{ marginBottom: "30px", marginTop: "40px" }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={6} sx={{ textAlign: { xs: "left", sm: "center" } }}>
          <Stack spacing={1}>
            <Stack spacing={0}>
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  textAlign: "left",
                  //marginTop: "80px",
                  //marginBottom: "5px",
                  fontWeight: "bold",
                  fontSize: "50px",
                }}
              >
                KMon
              </Typography>

              <Typography
                variant="h6"
                component="h1"
                sx={{
                  textAlign: "left",
                  //marginTop: "0px",
                  //marginBottom: "5px",
                  fontWeight: "bold",
                  fontSize: "50px",
                }}
              >
                Kafka Monitoring Tool
              </Typography>
            </Stack>

            <Typography
              variant="h6"
              sx={{ textAlign: "left", color: "#D6D6D6" }}
            >
              KMon is Kafka cluster monitoring tool with customization for
              metrics visualizations and configurable alerts that is fully
              compatible with KRaft.
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "flex-start", sm: "flex-start" },
              alignItems: "flex-start",
              gap: { xs: "5px", md: "10px" },
              marginTop: "30px",
              width: "100%",
            }}
          >
            <Button
              onClick={() => scrollTo("features-section")}
              disableRipple
              disableElevation
              variant="contained"
              sx={{
                backgroundColor: "#6874E8",
                color: "white",
                borderRadius: "20px",
                padding: "10px 10px",
                width: { xs: "100%", md: "180px" }, // Set to 100% on xs and 180px on md upwards
                maxWidth: "180px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#5563DF",
                },
                [theme.breakpoints.up("md")]: {
                  width: "180px",
                },
              }}
            >
              Explore
              <ArrowForwardIosIcon />
            </Button>

            <Button
              //onClick={() => scrollTo("features-section")}
              disableRipple
              disableElevation
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                padding: "10px 10px",
                width: { xs: "100%", md: "180px" }, // Set to 100% on xs and 180px on md upwards
                maxWidth: "180px",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "white",
                },
                [theme.breakpoints.up("md")]: {
                  width: "180px",
                },
              }}
            >
              Get Started
              <ArrowForwardIosIcon />
            </Button>
          </Box>
        </Grid>

        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <img src={logoImage} alt="Logo" 
          style={{ 
            width: '100%', // Use a percentage or fixed width that works for your design
            maxWidth: '200px', // Use a max-width that looks good on mobile
            height: 'auto'
          }} 
           />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
