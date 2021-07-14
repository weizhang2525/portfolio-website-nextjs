import Footer from "./Footer";
import React from "react";
import NavBar from "@components/NavBar";
import { Container, Flex } from "@chakra-ui/react";
import GenerateComponents from "@utils/generateComponents";

const Layout = ({ blocks }) => {
  return (
    <Flex direction="column" minH="100vh" minW="100vw">
      <NavBar />

      <Container alignItems="center" flexGrow="1" minW="100vw" p="0">
        {blocks.map((block, key) => {
          return <GenerateComponents block={block} key={key} />;
        })}
      </Container>
      <Footer />
    </Flex>
  );
};

export default Layout;
