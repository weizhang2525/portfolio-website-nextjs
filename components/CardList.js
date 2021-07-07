import React, { useState } from "react";
import Card from "@components/Card";
import { Flex } from "@chakra-ui/react";

const CardList = ({ cards }) => {
  const [cardSelected, SetCardSelected] = useState(
    cards.map((card, index) => {
      return { id: index, cardSelected: false, ...card };
    })
  );

  const handleCardClick = (id) => {
    const updatedSelectedState = cardSelected.map((card) => {
      return {
        ...card,
        cardSelected: card.id === id,
      };
    });

    console.log("hi");

    SetCardSelected(updatedSelectedState);
  };

  return (
    <Flex direction={["column", "column", "row"]}>
      {cardSelected.map((card, k) => {
        return (
          <Card
            item={card}
            key={k}
            sx={{
              mx: "15px",
            }}
            onClick={() => handleCardClick(k)}
          />
        );
      })}
    </Flex>
  );
};

export default CardList;
