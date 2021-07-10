import Footer from "./Footer";
import React from "react";
import NavBar from "@components/NavBar";
import { Container } from "@chakra-ui/react";
import GenerateComponents from "@utils/generateComponents";

const Layout = ({ blocks }) => {
  return (
    <>
      <NavBar />
      {blocks.map((block, key) => {
        return <GenerateComponents block={block} key={key} />;
      })}
      <Footer />
    </>
  );
};

export default Layout;
