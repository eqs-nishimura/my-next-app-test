"use client"

import React, { useState } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { ContactFormData } from '@/lib/types';
// import { sendMail } from '@/utils/mailService';

export const MFCContact = () => {
  const initialState: ContactFormData = {
    name: '',
    email: '',
    message: '',
    address: '',
    phone: '',
    seminar: false,
    seminarDate: '',
    company: '',
  };

  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [currentStep, setCurrentStep] = useState(0);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name) errors['name'] = '名前は必須です。';
    if (!formData.email) errors['email'] = 'メールアドレスは必須です。';
    if (!formData.phone) errors['phone'] = '電話番号は必須です。';
    if (!formData.company) errors['company'] = '会社名は必須です。';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field: keyof ContactFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setCurrentStep(1);
    }
  };
  
  const handleConfirmation = () => {
    // sendMail(formData);
    setCurrentStep(2);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return (
    <Container maxWidth="md">
      {currentStep === 0 && (
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="名前"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="会社名"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            error={!!errors.company}
            helperText={errors.company}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="メールアドレス"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="住所"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="電話番号"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.seminar}
                onChange={(e) =>
                  handleChange('seminar', e.target.checked)
                }
              />
            }
            label="セミナーに参加する"
          />
          {formData.seminar && (
            <FormControl variant="outlined" margin="normal" fullWidth>
              <InputLabel id="seminar-date-label">セミナー日程</InputLabel>
              <Select
                labelId="seminar-date-label"
                value={formData.seminarDate}
                onChange={(e) =>
                  handleChange('seminarDate', e.target.value as string)
                }
                label="セミナー日程"
              >
                <MenuItem value="2023-09-10">2023年9月10日</MenuItem>
                <MenuItem value="2023-09-20">2023年9月20日</MenuItem>
                <MenuItem value="2023-09-30">2023年9月30日</MenuItem>
              </Select>
            </FormControl>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            label="メッセージ"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            送信
          </Button>
        </form>
      )}
      {currentStep === 1 && (
        <div>
          <Typography variant="h5">確認画面</Typography>
          <Typography>Name: {formData.name}</Typography>
          <Typography>Email: {formData.email}</Typography>
          <Typography>Message: {formData.message}</Typography>
          <Typography>Address: {formData.address}</Typography>
          <Typography>Phone: {formData.phone}</Typography>
          <Typography>Seminar: {formData.seminar ? 'Yes' : 'No'}</Typography>
          {formData.seminar && (
            <Typography>Seminar Date: {formData.seminarDate}</Typography>
          )}
          <Typography>Company: {formData.company}</Typography>
          <Button variant="contained" color="primary" onClick={handleConfirmation}>
            送信
          </Button>
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <Typography variant="h5">完了画面</Typography>
          <Typography>
            お問い合わせを受け付けました。ありがとうございました。
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default MFCContact;