import CardList from "@components/CardList";
import TitleHero from "@components/TitleHero";
import { fetchCard } from "./contentfulAPIHelpers";

function parseCardList(cardList) {
  return cardList.map(async (card) => {
    return await fetchCard(card.sys.id);
  });
}

//generate component base on Contentful type
const generateComponents = ({ block }) => {
  switch (block.sys.contentType.sys.id) {
    case "cardList":
      return <CardList cards={parseCardList(block.fields.cardList)} />;
    case "titleHero":
      return <TitleHero {...block.fields} />;
  }
  return <></>;
};

export default generateComponents;
