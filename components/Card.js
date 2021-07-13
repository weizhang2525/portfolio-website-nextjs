import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

const Card = ({ item, ...rest }) => {
  const { title, imgSrc, subtitle, link } = item;
  const thumbnail = imgSrc && imgSrc.fields.file.url;
  return (
    <Box {...rest}>
      <Box>
        <Image
          src={thumbnail}
          alt={title}
          w={["300px", null, "300px"]}
          borderRadius="10px"
          boxShadow="0px 0px 3px 1px #ccc"
        />
      </Box>
      {item.cardSelected && (
        <Flex mt="10px" minHeight="10px" direction="column">
          <Text fontSize="md">{title}</Text>
          <Text fontSize="sm">{subtitle}</Text>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </Flex>
      )}
    </Box>
  );
};

export default Card;
