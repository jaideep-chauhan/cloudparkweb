import React from "react";
import { Box, Typography } from "@mui/material";

// Placeholder icons (replace with actual paths)
import coolerIcon from "../../public/images/temperature-control.png";
import warehouseIcon from "../../public/images/warehouse.png";
import leasingIcon from "../../public/images/lease.png";

const WarehousingSolutions = () => {
    return (
        <Box
            sx={{
                py: 6,
                backgroundColor: "#f5f5f5", // Light background to match the feel
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Box
                sx={{
                    // maxWidth: "1200px", // Adjusted to fit the layout
                    textAlign: "center",
                    marginX: "124px"
                }}
            >
                {/* Warehousing Solutions Label */}
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
                    <Typography variant="h6" color="#f4a236">Warehousing Solutions</Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="#003087"
                    gutterBottom
                    sx={{ mb: 2 }}
                >
                    Expanding Your Capacity with Flexible Warehousing Solutions
                </Typography>

                {/* Subheading */}
                <Typography
                    variant="body1"
                    color="text.primary"
                    paragraph
                    sx={{ mb: 6, maxWidth: "800px", margin: "0 auto", fontSize: "20px" }}
                >
                    At CloudPark, we are building scalable warehousing solutions tailored
                    for your needs. With storage options, including temperature-controlled
                    and dry storage, we are here to ensure your goods are stored safely,
                    securely, and are ready for transport.
                </Typography>

                {/* Sections */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: 14,
                        flexWrap: "wrap", // Allow wrapping on smaller screens
                        marginTop: "128px"
                    }}
                >
                    {/* Temperature-Controlled Storage */}
                    <Box
                        sx={{
                            backgroundColor: "#003087",
                            color: "#ffffff",
                            borderRadius: "8px",
                            paddingY: 5,
                            paddingX: 3,
                            flex: 1,
                            minWidth: "150px", // Ensure minimum width for responsiveness
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            position: "relative"
                        }}
                    >
                        <Box
                            sx={{
                                mb: 2,
                                backgroundColor: "#ffffff",
                                borderRadius: "50%",
                                width: 60,
                                height: 60,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: 0,
                                left: "0",
                                transform: "translate(-50%, -50%)",
                                transition: "transform 0.3s ease" // Optional: Added duration and timing function for smooth transition
                            }}
                        >
                            <img
                                src={coolerIcon}
                                alt="Cooler Icon"
                                style={{ width: "70px", height: "70px" }}
                            />
                        </Box>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                Temperature-Controlled Storage
                            </Typography>
                        <Box sx={{
                            display: "flex",
                            textAlign: "start",
                        }}>
                            <Typography variant="body2">
                                • Cooler and Frozen Space Available
                                <br />
                                • Maintain the integrity of perishable goods with state-of-the-art
                                refrigeration.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Dry Storage */}
                    <Box
                        sx={{
                            backgroundColor: "#003087",
                            color: "#ffffff",
                            borderRadius: "8px",
                            paddingY: 5,
                            paddingX: 3,
                            flex: 1,
                            minWidth: "300px", // Ensure minimum width for responsiveness
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            position: "relative"
                        }}
                    >
                        <Box
                            sx={{
                                mb: 2,
                                backgroundColor: "#ffffff",
                                borderRadius: "50%",
                                width: 60,
                                height: 60,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: 0,
                                left: "0",
                                transform: "translate(-50%, -50%)",
                                transition: "transform 0.3s ease" // Optional: Added duration and timing function for smooth transition
                            }}
                        >
                            <img
                                src={warehouseIcon}
                                alt="Warehouse Icon"
                                style={{ width: "70px", height: "70px" }}
                            />
                        </Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Dry Storage
                        </Typography>
                        <Typography variant="body2" textAlign="start">
                            • Versatile Space for Non-Perishable Goods
                            <br />
                            • Ideal for shelf-stable products, packaging materials and more.
                        </Typography>
                    </Box>

                    {/* Short-Term and Long-Term Leasing */}
                    <Box
                        sx={{
                            backgroundColor: "#003087",
                            color: "#ffffff",
                            borderRadius: "8px",
                            paddingY: 5,
                            paddingX: 3,
                            flex: 1,
                            minWidth: "300px", // Ensure minimum width for responsiveness
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            position: "relative"
                        }}
                    >
                        <Box
                            sx={{
                                mb: 2,
                                backgroundColor: "#ffffff",
                                borderRadius: "50%",
                                width: 60,
                                height: 60,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: 0,
                                left: "0",
                                transform: "translate(-50%, -50%)",
                                transition: "transform 0.3s ease", // Optional: Added duration and timing function for smooth transition
                                padding: "12px"
                            }}
                        >
                            <img
                                src={leasingIcon}
                                alt="Leasing Icon"
                                style={{ width: "70px", height: "70px" }}
                                padding= "12px"
                            />
                        </Box>
                        <Box sx={{ display: "flex",flexDirection: "column", alignItems: "start"}}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                Short-Term and Long-Term Leasing
                            </Typography>
                            <Typography variant="body2" textAlign="start">
                                • Flexible Storage Plans
                                <br />
                                • Choose from customizable lease durations to suit operational needs.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WarehousingSolutions;