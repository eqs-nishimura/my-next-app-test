import React from 'react';
import { Stack } from '@mui/material';
import MFCButton from './MFCButton';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EmailIcon from '@mui/icons-material/Email';

export default function NavButtonList() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <MFCButton 
        href="/contact?seminar=1" 
        startIcon={<EditCalendarIcon />} 
        isRound={true} 
        sx={{ width: 150, backgroundColor: "#1C2B58", color: "#fff", "&:hover": {
          backgroundColor: "#1C2B58"
        } }} 
      >説明会予約</MFCButton>
      <MFCButton 
        href="/contact" 
        startIcon={<EmailIcon />} 
        isRound={true} 
        sx={{ width: 150, backgroundColor: "#B01A1A", color: "#fff", "&:hover": {
          backgroundColor: "#B01A1A"
        } }}
      >お問い合わせ</MFCButton>
    </Stack>
  );
}