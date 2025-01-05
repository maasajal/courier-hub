"use client";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

interface Service {
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
}

const services: Service[] = [
  {
    title: "Delivery Jobs",
    description:
      "Find delivery jobs from local businesses and restaurants in your area.",
    buttonLabel: "Explore Jobs",
    onClick: () => {
      // Handle job search functionality
      console.log("Exploring delivery jobs...");
    },
  },
  {
    title: "Rider Support",
    description:
      "Get assistance and resources to improve your delivery experience.",
    buttonLabel: "Get Support",
    onClick: () => {
      // Handle rider support functionality
      console.log("Getting support...");
    },
  },
  {
    title: "Account Management",
    description: "Manage your account details, delivery history, and earnings.",
    buttonLabel: "Manage Account",
    onClick: () => {
      // Handle account management functionality
      console.log("Managing account...");
    },
  },
];

const Services: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={service.onClick}
                >
                  {service.buttonLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
