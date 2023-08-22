import axios from 'axios';
import { ContactFormData } from '@/lib/types';

export const sendMail = async (formData: ContactFormData) => {
  try {
    const lambdaEndpoint = 'https://erusli68sj.execute-api.us-east-1.amazonaws.com/Test'; // LambdaのエンドポイントURLを指定します。
    const axiosInstance = axios.create({
        // baseURL: "http://localhost:8080",
        headers: {
          'Content-Type': 'application/json',
        },
    })
    const response = await axiosInstance.post(lambdaEndpoint, formData); // formDataをPOSTリクエストのボディとして送信します。
    // const response = await axios.post(lambdaEndpoint, formData); // formDataをPOSTリクエストのボディとして送信します。

    if (response.status === 200) {
      console.log('メール送信成功:', response.data);
    } else {
      console.error('メール送信失敗:', response.data);
    }
  } catch (error) {
    console.error('メール送信エラー:', error);
  }
};