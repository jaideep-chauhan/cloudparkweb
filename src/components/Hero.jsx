import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showVideo, setShowVideo] = useState(false);

  // After 3 seconds, switch from background image to video
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <Box
      sx={{
        height: isMobile ? "500px" : "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        position: "relative",
        px: isMobile ? 3 : 5,
        overflow: "hidden",
        backgroundImage: !showVideo ? "url('/images/IMG_0431.JPG')" : "none", // Show image first
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // Smooth transition effect
      }}
    >
      {/* Show Video after 3 seconds */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/images/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark Overlay */}
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
{!showVideo && (
  <>
  {/* Left Blue Text */}
  <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          zIndex: 1,
          textAlign: isMobile ? "center" : "left",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          fontWeight="bold"
          sx={{ color: "#035DB8", lineHeight: 1.1 }}
        >
          WELCOME TO
        </Typography>
        <Typography
          variant={isMobile ? "h3" : "h1"}
          fontSize={isMobile ? "3rem" : "5rem"}
          fontWeight="bold"
          sx={{ color: "#035DB8", lineHeight: 1.1 }}
        >
          CLOUDPARK <br /> LOGISTICS
        </Typography>
      </Box>

      {/* Right Yellow Text */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: isMobile ? "5%" : "5%",
          textAlign: isMobile ? "center" : "left",
          width: isMobile ? "100%" : "auto",
          px: isMobile ? 2 : 0,
        }}
      >
        <Typography variant={isMobile ? "h5" : "h4"}>
          <span style={{ color: "#FFBF40", fontWeight: "bold" }}>
            Redefining Cargo Transport Excellence
          </span>
          {isMobile ? "" : <br />}
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"}>
          Our mission is to redefine logistics with innovation, precision and <br />
          exceptional Service, enabling our clients to achieve success!
        </Typography>
      </Box>
      </>
) }
      
    </Box>
  );
};

export default Hero;
