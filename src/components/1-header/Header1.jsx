// ? ===MUI elements
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// ? ===icons
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// ? ===menu list AR and EN
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// ? ===React Hooks
import { useState } from "react";

const options = ["EN", "AR"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  //*-----------------menu---------------------------->
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //* <------------------menu----------------------------

  return (
    <Box sx={{ bgcolor: "#2b3445" }}>
      <Stack direction={"row"} alignItems={"center"}>
        {/* hot btn */}
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#d23f57",
            borderRadius: 12,
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          HOT
        </Typography>
        {/* free shipping */}
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",

            borderRadius: 12,
            fontSize: "16px",
            fontWeight: "bold",
            color: "#f5f5f5",
          }}
        >
          free Shipping Now
        </Typography>

        <Box flexGrow={1} />

        {/*-------------------------------> theme section */}
        {theme.palette.mode === "light" ? (
          // * light mode button
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        ) : (
          // * darkMode button
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlinedIcon />
          </IconButton>
        )}
        {/*=======================theme section */}
        {/* Lang Menu */}
        <div>
          <List component="nav" aria-label="Languagues" sx={{}}>
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="sda"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText primary={options[selectedIndex]} />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        {/* Links social media */}
        <InstagramIcon style={{ color: "red[400]" }} />
        <WhatsAppIcon style={{ color: "green" }} />
      </Stack>
    </Box>
  );
}
