import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Layout } from '../sections/Layout';
import AuthProvider from '../context/AuthContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
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

export default MyApp;
