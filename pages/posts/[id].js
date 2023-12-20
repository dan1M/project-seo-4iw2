import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  const title = siteTitle + ' - ' + postData.title;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className={utilStyles.lightText}>
          Dernière mise à jour: <Date dateString={postData.date} />
        </div>
      </article>
    </Layout>
  );
}
