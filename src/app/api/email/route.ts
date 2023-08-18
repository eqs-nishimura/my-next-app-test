import { NextApiResponse } from 'next';

export const runtime = 'edge';

export async function POST(req: Request, res: NextApiResponse){
  const { name, email } = await req.json()
  // this will log the compiled email template created by React Email
  console.log(name, email)  
}