import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";

const NavItem = ({ slug, title }) => {
  return (
    <Link
      href={slug}
      sx={{
        textDecoration: "none",
      }}
    >
      <Heading fontSize={["lg", null, "4xl"]}>{title}</Heading>
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
      top="2"
    >
      <Heading flex={["2", "3", null, "5"]} fontSize={["lg", null, "4xl"]}>
        Wei Zhang
      </Heading>
      <Flex
        direction="row"
        justify="space-around"
        flex={["2", "2", "2", "2", "1"]}
      >
        <NavItem slug="/" title="Home" />
        <NavItem slug="/about" title="About" />
      </Flex>
    </Flex>
  );
};

export default NavBar;
