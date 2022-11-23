import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Main from '../components/layout/Main';

const NotFound = () => {
  const { pathname } = useRouter();
  return (
    <Main className="text-center">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1 className="mt-6 text-8xl">4😭4</h1>
      <div className="mt-4">
        The page <code>{pathname}</code> does not exist.
      </div>

      <Link href="/" className="underline">
        Back to home.
      </Link>
    </Main>
  );
};

export default NotFound;
