import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
// import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Using getServerSideProps

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

// Client-side Rendering??

// This approach works well for user dashboard pages, for example. 
// Because a dashboard is a private, user-specific page, SEO is not 
// relevant, and the page doesn’t need to be pre-rendered. The data
// is frequently updated, which requires request-time data fetching.

// SWR

// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

// NB: https://swr.vercel.app/

export default function Home({ allPostsData }) {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>

            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            <br />
              <small className={utilStyles.lightText}>
                {/* <Date dateString={date} /> */}
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}