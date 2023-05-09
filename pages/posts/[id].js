import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
// import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
    // params.id will be like ['a', 'b', 'c']
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };

//   Catch-all Routes
// pages/posts/[...id].js matches /posts/a, 
// but also /posts/a/b, /posts/a/b/c and so on.

//   return [
//     {
//       params: {
//         // Statically Generates /posts/a/b/c
//         id: ['a', 'b', 'c'],
//       },
//     },
//     //...
//   ];
}

export default function Post({ postData }) {
    return (
      <Layout>
         <Head>
        <title>{postData.title}</title>
        </Head>

        {/* {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date} */}
        {/* <Date dateString={postData.date} /> */}

        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* <Date dateString={postData.date} /> */}
            {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }