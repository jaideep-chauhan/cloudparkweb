import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1565c0", color: "white", py: 4, mt: 4 }}>
      {/* Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          width: "100%",
          gap: 3,
          px: 10,
        }}
      >
        {/* Left Section */}
        <Paper
          sx={{
            p: 3,
            bgcolor: "white",
            textAlign: "center",
            borderRadius: "10px",
            flex: "1 1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "120px",
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="primary">
            Get The Best Rate For Your Freight Transport
          </Typography>
          <Typography variant="body2" color="textSecondary">
            24/7 customer support
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              textTransform: "none",
              backgroundColor: "#FFA000",
              color: "white",
              fontWeight: "bold",
              px: 3,
            }}
          >
            Get the best rates ✅
          </Button>
        </Paper>

        {/* First Card */}
        <Paper
          sx={{
            p: 2,
            bgcolor: "#FFA000",
            borderRadius: "10px",
            flex: "1 1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ color: "blue", display: "flex", alignItems: "center", justifyContent: "center", width: "50px" }}>
            <LocalPhoneIcon fontSize="large" />
          </Box>
          <Box>
            <Typography fontWeight="bold" color="#fff">24/7 Customer Service</Typography>
            <Typography variant="body2" whiteSpace="pre-line">+1 416-900-8673</Typography>
          </Box>
        </Paper>

        {/* Second Card */}
        <Paper
          sx={{
            p: 2,
            bgcolor: "#FFA000",
            borderRadius: "10px",
            flex: "1 1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ color: "blue", display: "flex", alignItems: "center", justifyContent: "center", width: "50px" }}>
            <EmailIcon fontSize="large" />
          </Box>
          <Box>
            <Typography fontWeight="bold" color="#fff">General Inquiry</Typography>
            <Typography variant="body2" whiteSpace="pre-line">info@cloudpark.ca\nKaramvir G. - kgill@cloudpark.ca\nAman S. - askerhi@cloudpark.ca\nSal B. - sal@cloudpark.ca</Typography>
          </Box>
        </Paper>

        {/* Third Card */}
        <Paper
          sx={{
            p: 2,
            bgcolor: "#FFA000",
            borderRadius: "10px",
            flex: "1 1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ color: "blue", display: "flex", alignItems: "center", justifyContent: "center", width: "50px" }}>
            <HomeIcon fontSize="large" />
          </Box>
          <Box>
            <Typography fontWeight="bold" color="#fff">Calgary Yard</Typography>
            <Typography variant="body2" whiteSpace="pre-line">9050 Innovation Ave SE, Calgary, AB T3S 0A2\nGTA Yard - 7499 Auburn Road, Milton, ON, L9T 7V9</Typography>
          </Box>
        </Paper>
      </Box>

      {/* Footer Links */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2">Cloudpark Logistics | All rights reserved</Typography>
        <Box mt={1} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {["Privacy", "Terms & Conditions", "Site Map", "Contact"].map((link, i) => (
            <Typography key={i} component="span" sx={{ cursor: "pointer", textDecoration: "underline" }}>
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
