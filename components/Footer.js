import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { IconContext } from "react-icons";
import styled from "@emotion/styled";

const Icon = styled.a`
  margin: 0px 8px;
`;

const Footer = () => {
  return (
    <Flex justify="space-between" alignItems="center" px="10px" minW="100vw">
      <Text fontSize="md">This site was made by Wei Zhang</Text>
      <Flex justify="center">
        <IconContext.Provider value={{ color: "darkgray", size: "2em" }}>
          <Icon
            href="https://github.com/weizhang2525"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </Icon>
          <Icon
            href="https://www.linkedin.com/in/wzhang125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </Icon>
        </IconContext.Provider>
      </Flex>
    </Flex>
  );
};

export default Footer;
