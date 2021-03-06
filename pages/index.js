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
