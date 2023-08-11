// use client
"use client"
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navLinks } from '@/lib/navigationMenu';
import NavButtonList from './NavButtonList';

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <IconButton onClick={handleDrawerOpen}>
        <MenuIcon />
    </IconButton>
    <Drawer open={open} onClose={handleDrawerClose}>
        <Box sx={{ width: "100vw", }}>
            <Box display={{ xs: 'flex', md: 'none' }} sx={{ padding: "20px" }}>
                <NavButtonList />
            </Box>
            <Box display={{ xs: 'block', sm: 'none' }}>
            <List>
                {navLinks.map((navLink) => (
                    <ListItem key={navLink.text}>
                    <ListItemText primary={navLink.text} />
                    </ListItem>
                ))}
            </List>
            </Box>
            <ListItem onClick={handleDrawerClose}>
                <ListItemText primary="閉じる" />
                <CloseIcon />
            </ListItem>
        </Box>
    </Drawer>
    </>
  );
}