import React from 'react';
import { Stack } from '@mui/material';
import FCButton from './FCButton';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmailIcon from '@mui/icons-material/Email';

export default function NavButtonList() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <FCButton 
        text="説明会予約" 
        href="/reservation" 
        startIcon={<EditCalendarIcon />} 
        isRound={true} 
        sx={{ backgroundColor: "#1C2B58", color: "#fff", "&:hover": {
          backgroundColor: "#1C2B58"
        } }} 
      />
      <FCButton 
        text="お問い合せ" 
        href="/contact" 
        startIcon={<EmailIcon />} 
        isRound={true} 
        sx={{ backgroundColor: "#B01A1A", color: "#fff", "&:hover": {
          backgroundColor: "#B01A1A"
        } }} 
      />
    </Stack>
  );
}