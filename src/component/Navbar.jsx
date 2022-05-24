import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Home from "./Home";
import { HashLink as Link } from "react-router-hash-link";
const pages = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact me",
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    window.scrollTo(event.target);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ background: "#010f20" }}>
        <Toolbar sx={{ margin: [null, null, "0 15%"] }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Nitish J S
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#edede8" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{ backgroundColor: "#edede8" }}
                  key={page}
                  onClick={handleCloseNavMenu}
                  name={page}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
              color: "hsla(41, 100%, 50%, 0.89)",
            }}
          >
            Nitish J S
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ ml: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
