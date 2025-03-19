import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", link: "#home" },
    { text: "Services", link: "#services" },
    { text: "Our Fleet", link: "#fleet" },
    { text: "Contact Us", link: "#contact" },
  ];

  return (
    <AppBar position="static" color="default">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {/* Left Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navItems.slice(0, 2).map((item, index) => (
            <Button
              key={index}
              color="inherit"
              href={item.link}
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Logo in Center */}
        <Box>
          <img
            src="/images/logo-01.png"
            alt="Cloudpark Logistics"
            style={{ maxWidth: "180px" }}
          />
        </Box>

        {/* Right Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {navItems.slice(2).map((item, index) => (
            <Button
              key={index}
              color="inherit"
              href={item.link}
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component="a"
              href={item.link}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
