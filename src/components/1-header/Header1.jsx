// ? ===MUI elements
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

//* =====>  Icons <=========
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// *=====>  menu list AR and EN <=========
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// *=====>  React Hooks <=========
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";

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
    <Box sx={{ bgcolor: "#2b3445",borderBottomRightRadius:"5px",py:"5px",borderBottomLeftRadius:"5px" }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          {/* hot btn */}
          <Typography
            sx={{
              mr: 1,
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
              p: "3px 10px",
              borderRadius: 12,
              fontSize: "16px",
              fontWeight: "400",
              color: "#f5f5f5",
            }}
          >
            free Shipping
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
              <DarkModeOutlinedIcon sx={{ color: "white" }} />
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
              <LightModeOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
          )}
          {/*=======================theme section */}
          {/* Lang Menu */}

          <List component="nav" sx={{ p: 0, m: 0 }}>
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "12px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
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
                sx={{ fontSize: "12px", p: "4px 15px", minHeight: "15px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          {/* Links social media */}
          <InstagramIcon
            sx={{
              "&:hover": { color: "red", transition: "0.3s", scale: "1.1" },
              fontSize: "24px",
              mr: 1,
              color: "#fff",
            }}
          />
          <WhatsAppIcon
            sx={{
              "&:hover": { color: "green", transition: "0.3s", scale: "1.1" },

              fontSize: "24px",
             
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
