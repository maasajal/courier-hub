"use server";
import { Box, Typography, Button, Container } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "80vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cmllcnxlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        padding: "10rem 2rem",
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Courier Hub
        </Typography>
        <Typography variant="h6" paragraph>
          Your one-stop solution for managing delivery jobs and finding reliable
          riders. Join us to simplify logistics and make deliveries more
          efficient!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, px: 4, py: 1 }}
          href="/get-started"
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Banner;
