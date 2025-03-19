import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const RequestFormMap = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
                gap: 4,
                px: {md:10, xs: 2, sm: 0 }, // Add responsive padding
            }}
        >
            {/* Left Side: Request Quote Form */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    flex: { xs: "1 0 100%", md: "0 0 30%" }, // Responsive width
                    backgroundColor: "#003087",
                    color: "#ffffff",
                    borderRadius: "12px",
                    padding: 4,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        mb: 3,
                        borderLeft: "4px solid #ffd700",
                        paddingLeft: "8px",
                    }}
                >
                    Request Quote Form
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Personal Information
                </Typography>

                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    placeholder="Name"
                    name="name"
                    sx={{
                        mb: 2,
                        backgroundColor: "#ffffff",
                        borderRadius: "4px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "transparent" },
                            "&:hover fieldset": { borderColor: "transparent" },
                            "&.Mui-focused fieldset": { borderColor: "transparent" },
                        },
                    }}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Company Name"
                    name="company"
                    sx={{
                        mb: 2,
                        backgroundColor: "#ffffff",
                        borderRadius: "4px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "transparent" },
                            "&:hover fieldset": { borderColor: "transparent" },
                            "&.Mui-focused fieldset": { borderColor: "transparent" },
                        },
                    }}
                />

                <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        placeholder="Email"
                        name="email"
                        type="email"
                        sx={{
                            flex: { xs: "1 0 100%", sm: "1 0 48%" },
                            backgroundColor: "#ffffff",
                            borderRadius: "4px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "transparent" },
                                "&:hover fieldset": { borderColor: "transparent" },
                                "&.Mui-focused fieldset": { borderColor: "transparent" },
                            },
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Phone"
                        name="phone"
                        type="tel"
                        sx={{
                            flex: { xs: "1 0 100%", sm: "1 0 48%" },
                            backgroundColor: "#ffffff",
                            borderRadius: "4px",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "transparent" },
                                "&:hover fieldset": { borderColor: "transparent" },
                                "&.Mui-focused fieldset": { borderColor: "transparent" },
                            },
                        }}
                    />
                </Box>

                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Brief description about your inquiry"
                    name="description"
                    multiline
                    rows={3}
                    sx={{
                        mb: 3,
                        backgroundColor: "#ffffff",
                        borderRadius: "4px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "transparent" },
                            "&:hover fieldset": { borderColor: "transparent" },
                            "&.Mui-focused fieldset": { borderColor: "transparent" },
                        },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#ffd700",
                        color: "#000000",
                        textTransform: "none",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        "&:hover": {
                            backgroundColor: "#e6c200",
                        },
                    }}
                >
                    Contact Us
                </Button>

                <Typography variant="body2" sx={{ mt: 2, color: "#ffffff" }}>
                    Or Give us a call +1 416-900-8675
                </Typography>
                <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    The support center is available 24/7
                </Typography>
            </Box>

            {/* Right Side: Interactive Map */}
            <Box
                sx={{
                    flex: { xs: "1 0 100%", md: "0 0 70%" }, // Responsive width
                    border: "2px solid #003087",
                    borderRadius: "12px",
                    overflow: "hidden",
                    // position: "relative",
                    // height: "500px",
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43018922.93130649!2d-135.49136315867577!3d48.845496232096586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1742409797889!5m2!1sen!2sin"
                    width="100%" // Changed from fixed 600px
                    height="100%" // Changed from fixed 450px
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Box>
        </Box>
    );
};

export default RequestFormMap;