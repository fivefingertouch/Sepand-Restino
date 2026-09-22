<Layout>
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            مشاهده مستندات
          </Link>
        </div>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* هر ویژگی را اینجا اضافه کنید */}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="صفحه اصلی"
      description="توضیحات پروژه">
      <HeroBanner />
      <main>
        <Features />
      </main>
    </Layout>
  );
}
</Layout>