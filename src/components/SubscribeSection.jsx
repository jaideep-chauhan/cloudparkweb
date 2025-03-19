import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SubscribeSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 8,
      }}
    >
      {/* Logo Section */}
      <Box>
        <img src="/images/logo-01.png" alt="Cloudpark Logistics" width={250} />
      </Box>

      {/* Divider Line */}
      <Box
        sx={{
          width: "2px",
          height: "60px",
          backgroundColor: "#1565c0",
        }}
      />
      <Box textAlign="left">
        <Typography variant="h5" fontWeight="bold" color="primary">
          Subscribe for Updates
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Track your goods with Cloudpark Logistics
        </Typography>
      </Box>
      {/* Subscription Form */}
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          placeholder="Email Address"
          variant="outlined"
          sx={{
            bgcolor: "white",
            borderRadius: "5px",
            color: "black",
            "& input": { color: "black", height: "20px" },
            "& fieldset": { borderColor: "#1565c0" },
            width: "250px",
            height: "45px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFA000",
            textTransform: "none",
            fontWeight: "bold",
            px: 3,
            color: "white",
            height: "45px",
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeSection;
