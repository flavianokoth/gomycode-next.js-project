import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <Image src="/images/profile.jpg" alt="Profile" width={150} height={150} />
      </header>
      <nav>
        <Link href="/about">About</Link> | <Link href="/projects">Projects</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
