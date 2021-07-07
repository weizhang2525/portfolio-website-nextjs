import React from "react";
import { Flex, Container, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CardImage = styled.img`
  border-radius: 10px;
  width: 300px;
  height: 480px;
  box-shadow: 0px 0px 3px 1px #ccc;
`;

const Card = ({ item, ...rest }) => {
  const { title, imgSrc, subtitle, link } = item;
  const thumbnail = imgSrc && imgSrc.fields.file.url;
  return (
    <Container {...rest}>
      {imgSrc && <CardImage src={thumbnail} alt={thumbnail} />}
      {item.cardSelected && (
        <Flex mt="10px" minHeight="10px" direction="column">
          <Text fontSize="md">{title}</Text>
          <Text fontSize="sm" width="300px">
            {subtitle}
          </Text>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Flex>
      )}
    </Container>
  );
};

export default Card;
