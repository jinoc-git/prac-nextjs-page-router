import Head from 'next/head';
import ShortLinkList from '@/components/shortLinkList/ShortLinkList';
import Button from '@/components/button/Button';
import Link from '@/components/link/Link';
import styles from '@/styles/ShortLinkListPage.module.css';

export default function ShortLinkListPage() {
  const shortLinks = [];

  return (
    <>
      <Head>
        <title>주소 줄이기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>주소 줄이기</h1>
          <Button as={Link} href="/short-links/new">
            새로 만들기
          </Button>
        </header>
        <ShortLinkList items={shortLinks} />
      </div>
    </>
  );
}
