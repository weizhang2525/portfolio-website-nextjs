import React, { useState, useEffect } from "react";
import Card from "@components/Card";
import { SimpleGrid, Flex } from "@chakra-ui/react";

const CardList = ({ cards }) => {
  const [cardSelected, setCardSelected] = useState([]);

  useEffect(async () => {
    cards.map((card, index) => {
      card.then((data) => {
        setCardSelected((prevState) => {
          console.log(prevState);
          return prevState
            ? [{ id: index, cardSelected: false, ...data.fields }, ...prevState]
            : { id: index, cardSelected: false, ...data.fields };
        });
      });
    });
  }, []);

  const handleCardClick = (id) => {
    const updatedSelectedState = cardSelected.map((card) => {
      return {
        ...card,
        cardSelected: card.id === id,
      };
    });

    setCardSelected(updatedSelectedState);
  };

  return (
    <Flex maxW="100vw" justifyContent="center">
      <SimpleGrid columns={[1, 1, 2, 2, 4]} spacing="40px" px="40px" mb="2em">
        {cardSelected.length > 0 &&
          cardSelected.map((card, k) => {
            return (
              <Card
                item={card}
                key={k}
                onClick={() => handleCardClick(card.id)}
              />
            );
          })}
      </SimpleGrid>
    </Flex>
  );
};

export default CardList;
