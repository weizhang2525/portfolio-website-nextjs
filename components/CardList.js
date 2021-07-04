import React, { useState } from "react";
import Card from "@components/Card";
import { Container } from "@chakra-ui/react";

const CardList = ({ cards }) => {
  const [selected, setSelected] = useState(
    cards.map((card, index) => {
      return { id: index, selected: false };
    })
  );

  console.log(selected);

  return (
    <Container>
      {cards.map((card, k) => {
        return <Card item={card} selected={selected} key={k} />;
      })}
    </Container>
  );
};

export default CardList;
