import Script from 'next/script';
import Footer from './Footer';
import Head from 'next/head';
export function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="KsFPz7t5UOorMmRtfq1RYEkyq906BuE3nXKzWf9uOt0"
        />
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

      <div className="flex flex-col">
        <main className="">{children}</main>
        <Footer />
      </div>
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M5ZZP3N84S"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-M5ZZP3N84S', {
                    page_path: window.location.pathname,
                                  });`,
        }}
      />
    </>
  );
}
