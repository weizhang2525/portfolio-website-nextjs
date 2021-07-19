import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Flex, Text } from "@chakra-ui/react";

const RichText = ({ text }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text whiteSpace="pre-wrap">{children}</Text>
      ),
    },
  };

  return (
    <Flex justify="center" direction="column" px="5em">
      {documentToReactComponents(text, options)}
    </Flex>
  );
};

export default RichText;
