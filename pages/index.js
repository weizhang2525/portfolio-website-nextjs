import Head from "next/head";
import Layout from "@components/Layout";
import { fetchPage } from "@utils/contentfulAPIHelpers";
import { Flex } from "@chakra-ui/react";

export default function Home({ page }) {
  return (
    <Flex h="100vh" flexDirection="column" justify="center" align="center">
      <Head>
        <title>Welcome to my Portfolio Website</title>
      </Head>

      <Layout blocks={page.blocks} />

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
    </Flex>
  );
}

export async function getStaticProps() {
  const page = await fetchPage("home");
  return {
    props: {
      page,
    },
  };
}
