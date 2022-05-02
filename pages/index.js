import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/Requests';
// Requests

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu 2.0 clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );

}   

export const getServerSideProps = async context => {
  const genre = context.query.genre;
  console.log('request', `${process.env.BASE_URL}${requests[genre]?.url || requests.trending.url}`);
  const request = await fetch(`${process.env.BASE_URL}${requests[genre]?.url || requests.trending.url}`)
    .then(res => res.json());

  return {
    props: {
      results: request.results
    }
  };
};