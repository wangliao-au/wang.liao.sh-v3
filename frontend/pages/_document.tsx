import React from 'react';
import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext,
   DocumentInitialProps,
} from 'next/document';
import {CssBaseline} from '@nextui-org/react';
import {globalStyles} from '../styles/global.stitches';

class MyDocument extends Document {
   static async getInitialProps(
      ctx: DocumentContext
   ): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx);
      return {
         ...initialProps,
         styles: React.Children.toArray([initialProps.styles]),
      };
   }

   render() {
      return (
         <Html lang="en">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               href="https://fonts.googleapis.com/css?family=Raleway:wght@600&display=swap"
               rel="stylesheet"
            />
            <Head>{CssBaseline.flush()}</Head>

            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
