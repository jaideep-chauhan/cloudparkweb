import React from "react";
import { Box, Typography, Container, useMediaQuery, useTheme } from "@mui/material";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        height: isMobile ? "500px" : "700px",
        backgroundImage: "url('/images/IMG_0431.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        position: "relative",
        px: isMobile ? 3 : 5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(11, 10, 10, 0.6)", 
        }}
      />
      
      {/* Left Blue Text */}
      <Box sx={{ position: "absolute", top: "10%", left: "5%", zIndex: 1, textAlign: isMobile ? "center" : "left", width: isMobile ? "100%" : "auto" }}>
        <Typography variant={isMobile ? "h5" : "h3"} fontWeight="bold" sx={{ color: "#66B2FF", lineHeight: 1.1 }}>
          WELCOME TO
        </Typography>
        <Typography variant={isMobile ? "h3" : "h1"} fontWeight="bold" sx={{ color: "#66B2FF", lineHeight: 1.1, fontSize:"5rem" }}>
          CLOUDPARK <br/> LOGISTICS
        </Typography>
      </Box>
      
      {/* Right Yellow Text */}
      <Box sx={{ position: "absolute", bottom: "10%", right: isMobile ? "5%" : "5%", textAlign: isMobile ? "center" : "left", width: isMobile ? "100%" : "auto", px: isMobile ? 2 : 0 }}>
        <Typography variant={isMobile ? "h5" : "h4"}>
          <span style={{ color: "#FFD700", fontWeight: "bold" }}>
            Redefining Cargo Transport Excellence
          </span>
          {isMobile ? "" : (<br />)}
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"}>
          Our mission is to redefine logistics with innovation, precision and <br/>
          exceptional Service, enabling our clients to achieve success!
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
