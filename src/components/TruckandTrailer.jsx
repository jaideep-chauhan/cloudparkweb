import React from "react";
import { Box, Typography } from "@mui/material";
import truckImage from "../../public/images/halftruck.png";

const TruckAndTrailerRepairServices = () => {
    return (
        <Box
            sx={{
                width: "100%",
                py: 6,
                backgroundColor: "#f5f5f5",
                // position: "relative",
                paddingLeft: "6%",
                marginBottom: "10%",
                overflow:"hidden"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    textAlign: "center",
                    px: { xs: 2, md: 0 },
                }}
            >
                <Box
                    sx={{
                        display: "inline-block",
                        backgroundColor: "#003087",
                        color: "#ffffff",
                        borderRadius: "20px",
                        px: 2,
                        py: 0.5,
                        mb: 4,
                    }}
                >
                    <Typography variant="h6" color="#f4a236">Truck & Trailer Repair Services</Typography>
                </Box>

                <Box
                    sx={{
                        position: "relative",
                        minHeight: "400px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    {/* Cards Section - 70% width */}
                    <Box
                        sx={{
                            width: "70%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            zIndex: 2,
                        }}
                    >
                        {/* Top Row - 3 Cards */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Tire Changes */}
                            <Box
                                sx={{
                                    backgroundColor: "#003087",
                                    color: "#ffffff",
                                    borderRadius: "12px",
                                    paddingX: 3,
                                    paddingY: 5,
                                    minWidth: "200px",
                                    flex: 1,
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" mb="16px" gutterBottom>
                                    Tire Changes
                                </Typography>
                                <Typography variant="body2" textAlign="left">
                                    • On-site and roadside tire replacements
                                    <br />
                                    • New and retread tire installation
                                    <br />
                                    • Flat tire repairs and pressure checks
                                </Typography>
                            </Box>

                            {/* Brake Replacement */}
                            <Box
                                sx={{
                                    backgroundColor: "#003087",
                                    color: "#ffffff",
                                    borderRadius: "12px",
                                    paddingX: 3,
                                    paddingY: 5,
                                    minWidth: "200px",
                                    flex: 1,
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" mb="16px" gutterBottom>
                                    Brake Replacement
                                </Typography>
                                <Typography variant="body2" textAlign="left">
                                    • Full brake system inspections
                                    <br />
                                    • Brake pad, drum, and rotor replacements
                                    <br />
                                    • ABS system troubleshooting and repairs
                                </Typography>
                            </Box>

                            {/* Refrigeration Unit Repairs */}
                            <Box
                                sx={{
                                    backgroundColor: "#003087",
                                    color: "#ffffff",
                                    borderRadius: "12px",
                                    paddingX: 3,
                                    paddingY: 5,
                                    minWidth: "200px",
                                    flex: 1,
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" mb="16px" gutterBottom>
                                    Refrigeration Unit Repairs
                                </Typography>
                                <Typography variant="body2" textAlign="left">
                                    • Routine maintenance and diagnostics for reefer units
                                    <br />
                                    • Temperature control system calibration
                                    <br />
                                    • Electrical and mechanical component repairs
                                </Typography>
                            </Box>
                        </Box>

                        {/* Bottom Row - 2 Cards */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                justifyContent: "space-between",
                                maxWidth: "75%"
                            }}
                        >
                            {/* Annual Safety Inspections */}
                            <Box
                                sx={{
                                    backgroundColor: "#003087",
                                    color: "#ffffff",
                                    borderRadius: "12px",
                                    paddingX: 3,
                                    paddingY: 5,
                                    minWidth: "200px",
                                    flex: 1,
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" mb="16px" gutterBottom>
                                    Annual Safety Inspections
                                </Typography>
                                <Typography variant="body2" textAlign="left">
                                    • Annual safety inspections and certifications
                                    <br />
                                    • Lighting and electrical system checks
                                    <br />
                                    • Door, seal, and structural integrity assessment
                                </Typography>
                            </Box>

                            {/* Basic Truck & Trailer Repairs */}
                            <Box
                                sx={{
                                    backgroundColor: "#003087",
                                    color: "#ffffff",
                                    borderRadius: "12px",
                                    paddingX: 3,
                                    paddingY: 5,
                                    minWidth: "200px",
                                    flex: 1,
                                }}
                            >
                                <Typography variant="h6" fontWeight="bold" mb="16px" gutterBottom>
                                    Basic Truck & Trailer Repairs
                                </Typography>
                                <Typography variant="body2" textAlign="left">
                                    • Lighting system repairs (LEDs, wiring, faulty connections)
                                    <br />
                                    • Battery testing and replacements
                                    <br />
                                    • Air system and suspension maintenance
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Truck Image - 30% width */}
                    <img
                        src={truckImage}
                        alt="Truck"
                        style={{
                            scale: "1.4",
                            width: "30%",
                            objectFit: "cover",
                            objectPosition: "right",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default TruckAndTrailerRepairServices;