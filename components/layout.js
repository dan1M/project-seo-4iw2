import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Chef Retard et ses mésaventures';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Chef Retard et ses mésaventures' />
        <meta name='og:title' content={siteTitle} />
        <meta name='robots' content='all' />
        <meta
          name='keywords'
          content='chef, retard, chef retard, chef-retard, histoire'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Chef Retard' />
        <title>Chef Retard et ses mésaventures</title>
      </Head>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Tous les actes</Link>
        </div>
      )}
      <header className={styles.header}>
        <h1 className={home ? utilStyles.heading2Xl : utilStyles.headingLg}>
          {siteTitle}
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
