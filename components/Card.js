import React from "react";
import { Flex, Box, Text, Tag } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CardImage = styled.img`
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px #ccc;
`;

const Card = ({ item, ...rest }) => {
  const { title, imgSrc, subtitle, link } = item;
  const thumbnail = imgSrc && imgSrc.fields.file.url;
  return (
    <Box {...rest} w="300px">
      <CardImage src={thumbnail} alt={title} />

      {item.cardSelected && (
        <Flex mt="10px" minHeight="10px" direction="column">
          <Text fontSize="lg" mb="12px" fontWeight="500">
            {title}
          </Text>
          <Text fontSize="md" mb="12px">
            {subtitle}
          </Text>

          <Flex mb="12px">
            {item.technologies.map((tag) => {
              return <Tag mr="6px">{tag}</Tag>;
            })}
          </Flex>

          <a href={link} target="_blank" rel="noopener noreferrer">
            <Text fontSize="sm" mb="12px">
              View on Github
            </Text>
          </a>
        </Flex>
      )}
    </Box>
  );
};

export default Card;
