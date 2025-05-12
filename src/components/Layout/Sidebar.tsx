"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  InputBase,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LoginIcon from "@mui/icons-material/Login";
import Image from "next/image";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  toggleDrawer: (open: boolean) => void;
}

export default function Sidebar({
  open,
  toggleDrawer,
}: SidebarProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)} 
        sx={{
          width: "100%",
          maxWidth: 320,
          height: "100%",
          borderRadius: 0,
          zIndex: 49,
        }}
    >
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#f1f1f1",
            px: 2,
            py: 1,
            borderRadius: 2,
            mb: 2,
          }}
        >
          <SearchIcon sx={{ mr: 1, color: "gray" }} />
          <InputBase placeholder="Search for an item" fullWidth />
        </Box>

        <List>
          <ListItem>
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Search users" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
            <Image src="/logoTrade.png" width={20} height={20} alt="logo" />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </ListItem>
        </List>

        <Divider sx={{ my: 1 }} />

        <List>
          {["About", "Help", "Settings", "Discord", "Contact Us"].map(
            (text) => (
              <ListItem key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
}
