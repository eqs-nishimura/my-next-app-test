export const runtime = 'edge';

import Contact from '@/component/contact';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-white'>
      <Contact />
    </main>
  );
}