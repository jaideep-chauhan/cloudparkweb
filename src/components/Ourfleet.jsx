import React from "react";
import { Box, Typography } from "@mui/material";
import truckImage from "../../public/images/IMG_0431.png";

const OurFleet = () => {
    return (
        <Box
            sx={{
                py: 6,
                backgroundColor: "#f5f5f5", // Light background to match the feel
                width: "100%"
            }}
        >
            <Box
                sx={{
                    maxWidth: "100%", // Adjusted to fit the layout
                    textAlign: "center",
                    position: "relative",
                    width: "full"
                }}
            >
                {/* Our Fleet Label */}
                <Box
                    sx={{
                        display: "inline-block",
                        backgroundColor: "#003087",
                        color: "#ffffff",
                        borderRadius: "20px",
                        px: 2,
                        py: 0.5,
                        mb: 1, // Increased margin-bottom for more space
                        mt: 10
                    }}
                >
                    <Typography variant="h6" color="#f4a236">Our Fleet</Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#003087"
                    gutterBottom
                    sx={{ mb: 2, mt: 1 }} // Increased margins for more space
                >
                    Tailored Solutions for Every Logistics Need
                </Typography>

                {/* Grid Layout for Alternating Sections */}
                <Box
                    sx={{
                        position: "relative", // Allow absolute positioning of the truck image
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 0, // No gap between sections to match the screenshot
                        minHeight: "700px", // Increased height for more vertical space
                    }}
                >
                    {/* Row 1: Modern Fleet (Blue) */}
                    <Box
                        sx={{
                            backgroundColor: "#003087",
                            color: "#ffffff",
                            padding: 8, // Increased padding for more space (32px)
                            minHeight: "300px", // Increased height for each section
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start", // Align content to the left
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            MODERN FLEET
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
                            We operate a fleet of over 30 trucks equipped with the latest
                            technology and safety features to ensure efficient and reliable
                            transport.
                        </Typography>
                    </Box>

                    {/* Row 1: Vehicle Types (White) */}
                    <Box
                        sx={{
                            backgroundColor: "#ffffff",
                            padding: 8, // Increased padding for more space (32px)
                            minHeight: "300px", // Increased height for each section
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end", // Align content to the right
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            VEHICLE TYPES
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: "right" }}>
                            Our fleet includes both Dry Vans and Refrigerated (Reefer) units,
                            designed to meet up-to-date market specifications or handling
                            diverse freight needs.
                        </Typography>
                    </Box>

                    {/* Row 2: Secure Storage (White) */}
                    <Box
                        sx={{
                            backgroundColor: "#ffffff",
                            padding: 8, // Increased padding for more space (32px)
                            minHeight: "300px", // Increased height for each section
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start", // Align content to the left
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            SECURE STORAGE
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
                            We operate a fleet of over 30 trucks equipped with the latest
                            technology and safety features to ensure efficient and reliable
                            transport.
                        </Typography>
                    </Box>

                    {/* Row 2: Comprehensive Capabilities (Blue) */}
                    <Box
                        sx={{
                            backgroundColor: "#003087",
                            color: "#ffffff",
                            padding: 8, // Increased padding for more space (32px)
                            minHeight: "300px", // Increased height for each section
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end", // Align content to the right
                        }}
                    >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            COMPREHENSIVE CAPABILITIES
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: "right" }}>
                            Our range of services and equipment enables us to transport
                            everything from temperature-sensitive goods to standard dry
                            freight.
                        </Typography>
                    </Box>

                    {/* Truck Image (Absolutely Positioned at the Intersection) */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%", // Center vertically
                            left: "50%", // Center horizontally
                            transform: "translate(-50%, -50%)", // Adjust for the image's own dimensions
                            zIndex: 1, // Ensure the image is above the grid
                            width: "100%", // Span the full width of the grid
                            maxWidth: "600px", // Limit the width to match the screenshot
                            textAlign: "center",
                        }}
                    >
                        <img
                            src={truckImage}
                            alt="Modern Truck"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OurFleet;