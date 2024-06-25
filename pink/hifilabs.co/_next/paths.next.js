import Image from 'next/image';
import Head from 'next/head';

export default function MyPage() {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>{' '}
      <Image src="/apple-touch-icon.png" alt="Apple Touch Icon" width={180} height={180} />{' '}
    </>
  );
}
