import Head from "next/head";

import { fetchEntries } from "utils/contentfulPosts";

import Header from "@components/Header";
import Footer from "@components/Footer";
import CardList from "@components/CardList";

export default function Home({ cards }) {
  return (
    <div className="container">
      <Head>
        <title>Welcome to my portfolio website</title>
      </Head>

      <main>
        <Header />
        <CardList cards={cards} />
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const cards = await res.map((c) => {
    return c.fields;
  });

  return {
    props: {
      cards,
    },
  };
}
