import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Mancoba. I'm a sofware engineer! I can 
          help you build a product, feature or website. 
          Take a look of my work. If you like what you see 
          and have a project you need coded, don't hesitate 
          and contact me on <a href='https://www.linkedin.com/in/mancoba/'>LinkedIn</a>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}