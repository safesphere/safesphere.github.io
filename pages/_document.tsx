import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700;800&amp;display=swap"
            rel="stylesheet"
          ></link>
          <meta
            property="og:title"
            content="Maintaining social distancing has never been easier than with
                SafeSphere"
          />
          <meta
            property="og:image"
            content="http://www.safesphere.com/safesphere-og.png"
          />
          B
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
