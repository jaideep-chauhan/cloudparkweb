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
          // flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 3,
          px: 10,
        }}
      >
        {/* Left Section */}
        <Paper
          sx={{
            minWidth: "20rem",
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
            gap: 2,
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

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
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
              <Box
                sx={{
                  color: "blue",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                }}
              >
                <LocalPhoneIcon fontSize="large" />
              </Box>
              <Box>
                <Typography fontWeight="bold" color="#fff">
                  24/7 Customer Service
                </Typography>
                <Typography variant="body2" whiteSpace="pre-line">
                  +1 416-900-8673
                </Typography>
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
                gap: 1,
              }}
            >
              <EmailIcon sx={{ color: "blue" }} fontSize="large" />
              <Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" color="#fff" fontSize="15px">
                      General Inquiry
                    </Typography>
                    <Typography variant="p" fontSize="15px" paddingLeft="10px">
                      info@cloudpark.ca
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" color="#fff" fontSize="15px">
                      Karamvir G
                    </Typography>
                    <Typography variant="p" fontSize="15px" paddingLeft="10px">
                      kgill@cloudpark.ca
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" color="#fff" fontSize="15px">
                      Aman S.
                    </Typography>
                    <Typography variant="p" fontSize="15px" paddingLeft="10px">
                      askerhi@cloudpark.ca
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" color="#fff" fontSize="15px">
                      Sal B.
                    </Typography>
                    <Typography variant="p" fontSize="15px" paddingLeft="10px">
                      sal@cloudpark.ca
                    </Typography>
                  </Box>
                </Box>
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
              <HomeIcon fontSize="large" sx={{color:"blue"}}/>

              <Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" color="#fff" fontSize="15px">
                      Calgary Yard
                    </Typography>
                    <Typography variant="p" fontSize="15px" paddingLeft="10px">
                      9050 Innovation Ave SE, Calgary, AB T3S 0A2
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" color="#fff" fontSize="15px">
                    GTA Yard
                    </Typography>
                    <Typography variant="p" fontSize="15px" paddingLeft="10px">
                    7499 Auburn Road,
                    Milton, ON, L9T 7V9
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Typography>Home</Typography>
            <Typography>Services</Typography>
            <Typography>Our Fleet</Typography>
            <Typography>Contact Us</Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Links */}
      <Box
        mt={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "80px",
        }}
      >
        <Typography variant="p" fontSize="14px">
          Cloudpark Logistics | All rights reserved
        </Typography>
        <Box mt={1} sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {[
            "Privacy",
            "/",
            "Terms & Conditions",
            "/",
            "Site Map",
            "/",
            "Contact",
          ].map((link, i) => (
            <Typography
              key={i}
              variant="p"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
