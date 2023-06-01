import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Layout } from '../sections/Layout';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import AuthProvider from '../context/AuthContext';

type App = {
  Component: string;
  pageProps: { session: ReactNode };
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: App): JSX.Element {
  return (
    <>
      {' '}
      <AuthProvider>
        <ThemeProvider enableSystem={true} attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
