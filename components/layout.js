import styles from './layout.module.css';
import Image from 'next/image';
import Head from 'next/head';
import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Alan';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta
                name="og:title"
                content={siteTitle}
            />
            <meta
                name="twitter:card"
                content="summary_large_image"
            />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={utilStyle.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={utilStyle.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyle.borderCircle}
                                height={108}
                                width={108}
                                alt={name}
                        />
                    </Link>
                    <h2 className={utilStyle.headingLg}>
                        <Link href="/" className={utilStyle.colorInherit}>
                            {name}
                        </Link>
                    </h2>
                </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    Back to home
                </Link>
            </div>
        )}
    </div>
    );
}