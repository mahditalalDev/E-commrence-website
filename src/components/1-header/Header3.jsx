import {
  Container,
  Typography,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import WidgetsIcon from "@mui/icons-material/Widgets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import WatchIcon from "@mui/icons-material/Watch";

import { useState } from "react";
import { useTheme } from "@emotion/react";
const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          className=""
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "250px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            // @ts-ignore
            color: theme.palette.text.secondary,
          }}
        >
          <WidgetsIcon />
          <Typography
            sx={{
              padding: 0,
              marginLeft: "5px",
              textTransform: "capitalize",
              marginTop: "",
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1}></Box>
          <ArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          style={{ width: "250px" }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PhoneAndroidIcon />
            </ListItemIcon>
            <ListItemText>phones</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HeadsetMicIcon />
            </ListItemIcon>
            <ListItemText>HeadSets</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WatchIcon />
            </ListItemIcon>
            <ListItemText>watches</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Container>
  );
}
