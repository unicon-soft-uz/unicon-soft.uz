import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Layout } from '../sections/Layout';
// @ts-ignore
import type { AppProps } from 'next/app';
// @ts-ignore
import { ThemeProvider } from 'next-themes';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
