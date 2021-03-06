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
        <p>
          Olá, sou o Max. Sou desenvoldedor de software com foco em aplicações web. Entre em contato comigo pelo <a href="https://www.linkedin.com/in/maxwelldantas"
            target="_blank">LinkedIn</a> e os repositórios com meus projetos se encontram no <a href="https://github.com/maxwelldantas" target="_blank">GitHub</a>.
        </p>
      </section>
    </Layout>
  );
}