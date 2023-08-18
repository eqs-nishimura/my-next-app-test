"use client"

import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Typography, Checkbox, FormControlLabel, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const MFCContact = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const seminarParam = searchParams.get('seminar');

    const initialState = {
        name: '',
        email: '',
        message: '',
        address: '',
        phone: '',
        seminar: false,
        seminarDate: '',
        company: '',
        errors: {},
    };
    
    const [name, setName] = useState(initialState.name);
    const [email, setEmail] = useState(initialState.email);
    const [message, setMessage] = useState(initialState.message);
    const [address, setAddress] = useState(initialState.address);
    const [phone, setPhone] = useState(initialState.phone);
    const [seminar, setSeminar] = useState(seminarParam ? true : initialState.seminar);
    const [seminarDate, setSeminarDate] = useState(seminarParam ? '2023-09-10' : initialState.seminarDate);
    const [company, setCompany] = useState(initialState.company);
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const validateForm = () => {
        const errors: {[key: string]: string} = {};
        if (!name) errors['name'] = '名前は必須です。';
        if (!email) errors['email'] = 'メールアドレスは必須です。';
        if (!phone) errors['phone'] = '電話番号は必須です。';
        if (!company) errors['company'] = '会社名は必須です。';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

  const resetForm = () => {
    setName(initialState.name);
    setEmail(initialState.email);
    setMessage(initialState.message);
    setAddress(initialState.address);
    setPhone(initialState.phone);
    setSeminar(initialState.seminar);
    setSeminarDate(initialState.seminarDate);
    setCompany(initialState.company);
    setErrors(initialState.errors);
    setCurrentStep(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Address:', address);
        console.log('Phone:', phone);
        console.log('Seminar:', seminar);
        console.log('Seminar Date:', seminarDate);
        console.log('Company:', company);
        // ここでメール送信の処理などを実行する
        resetForm(); // フォーム送信が完了したらリセット
    }
  };

  const [currentStep, setCurrentStep] = useState(0);

  const handleConfirmation = () => {
    setCurrentStep(1);
  };

  const handleSendMail = () => {
    console.log('Sending mail...');
    setCurrentStep(2);
  };

  useEffect(() => {
    // マウント時にフォームをリセットする
    setName('');
    setEmail('');
    setMessage('');
    setAddress('');
    setPhone('');
    setSeminar(false);
    setSeminarDate('');
    setCompany('');
    setErrors({});
  }, []);  // 依存配列が空のため、マウント時にのみ実行される

  return (
    <Container maxWidth="md">
    {currentStep === 0 && (
        <form onSubmit={handleSubmit}>
        <TextField variant="outlined" margin="normal" fullWidth label="名前" value={name} onChange={e => setName(e.target.value)} error={!!errors.name} helperText={errors.name} />
        <TextField variant="outlined" margin="normal" fullWidth label="会社名" value={company} onChange={e => setCompany(e.target.value)} error={!!errors.company} helperText={errors.company} />
        <TextField variant="outlined" margin="normal" fullWidth label="メールアドレス" value={email} onChange={e => setEmail(e.target.value)} error={!!errors.email} helperText={errors.email} />
        <TextField variant="outlined" margin="normal" fullWidth label="住所" value={address} onChange={e => setAddress(e.target.value)} />
        <TextField variant="outlined" margin="normal" fullWidth label="電話番号" value={phone} onChange={e => setPhone(e.target.value)} error={!!errors.phone} helperText={errors.phone} />
        <FormControlLabel control={<Checkbox checked={seminar} onChange={e => setSeminar(e.target.checked)} />} label="セミナーに参加する" />
        {seminar && (
          <FormControl variant="outlined" margin="normal" fullWidth>
            <InputLabel id="seminar-date-label">セミナー日程</InputLabel>
            <Select labelId="seminar-date-label" value={seminarDate} onChange={e => setSeminarDate(e.target.value as string)} label="セミナー日程">
              <MenuItem value="2023-09-10">2023年9月10日</MenuItem>
              <MenuItem value="2023-09-20">2023年9月20日</MenuItem>
              <MenuItem value="2023-09-30">2023年9月30日</MenuItem>
            </Select>
          </FormControl>
        )}
        <TextField variant="outlined" margin="normal" fullWidth multiline rows={4} label="メッセージ" value={message} onChange={e => setMessage(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" onClick={handleConfirmation}>送信</Button>
      </form>
    )}
    {currentStep === 1 && (
        <div>
          <Typography variant="h5">確認画面</Typography>
          <Typography>Name: {name}</Typography>
          <Typography>Email: {email}</Typography>
          <Typography>Message: {message}</Typography>
          <Typography>Address: {address}</Typography>
          <Typography>Phone: {phone}</Typography>
          <Typography>Seminar: {seminar ? "Yes" : "No"}</Typography>
          {seminar && <Typography>Seminar Date: {seminarDate}</Typography>}
          <Typography>Company: {company}</Typography>
          <Button variant="contained" color="primary" onClick={handleSendMail}>送信</Button>
        </div>
    )}
    {currentStep === 2 && (
        <div>
            <Typography variant="h5">完了画面</Typography>
            <Typography>お問い合わせを受け付けました。ありがとうございました。</Typography>
        </div>
    )}
    </Container>
  );
};

export default MFCContact;