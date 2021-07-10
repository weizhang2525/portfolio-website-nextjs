import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";

const NavItem = ({ slug, title }) => {
  return (
    <Link
      href={slug}
      sx={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <Heading>{title}</Heading>
    </Link>
  );
};

const NavBar = () => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      w="100vw"
      px="20px"
      position="absolute"
      top="0"
    >
      <Heading flex="5">Wei Zhang</Heading>
      <Flex direction="row" justify="space-around" flex="1">
        <NavItem slug="/" title="Home" />
        <NavItem slug="/about" title="About" />
      </Flex>
    </Flex>
  );
};

export default NavBar;
