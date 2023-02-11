import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://us.uz/wp-content/themes/aus-unicon/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://us.uz/wp-content/themes/aus-unicon/images/favicons/favicon-16x16.png"
        />

        <title>UNICON-SOFT</title>
      </Head>

      <div className=" mx-auto flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
