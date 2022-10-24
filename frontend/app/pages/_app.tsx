import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import siteMetadata from '../data/siteMetadata';

// import '../styles/globals.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import '../css/tailwind.css';
// import '../css/prism.css';
// import 'katex/dist/katex.css';

// import '@fontsource/inter/variable-full.css';

import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps)  {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// export default MyApp;