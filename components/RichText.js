import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Flex } from "@chakra-ui/react";

const RichText = ({ text }) => {
  return (
    <Flex justify="center" direction="column" px="5em">
      {documentToReactComponents(text)}
    </Flex>
  );
};

export default RichText;
