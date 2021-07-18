import Head from "next/head";
import Layout from "@components/Layout";
import { fetchPage } from "@utils/contentfulAPIHelpers";
import { Flex } from "@chakra-ui/react";

const About = ({ page }) => {
  return (
    <Flex h="100vh" flexDirection="column" justify="center" align="center">
      <Head>
        <title>About Me</title>
      </Head>

      <Layout blocks={page.blocks} />
    </Flex>
  );
};

export default About;

export async function getStaticProps() {
  const page = await fetchPage("about");
  return {
    props: {
      page,
    },
  };
}
