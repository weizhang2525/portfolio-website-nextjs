import React from "react";
import { Heading, Text, Container } from "@chakra-ui/react";

const TitleHero = ({ title, subtitle }) => {
  return (
    <Container max-width="66.6%" justify="center" py="5em">
      <Heading fontSize="6rem" m="0">
        {title}
      </Heading>
      <Text fontSize="1.25rem">{subtitle}</Text>
    </Container>
  );
};

export default TitleHero;
