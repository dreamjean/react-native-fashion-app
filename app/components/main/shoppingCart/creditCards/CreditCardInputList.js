import { useState } from "react";
import styled from "styled-components";

import { constants } from "../../../../config";
import CreditCardInput from "./CreditCardInput";

const CreditCardInputList = ({ cards = [] }) => {
  const [selectedCard, setSelectedCard] = useState([cards[0]]);

  return (
    <Container>
      <CardsList horizontal showsHorizontalScrollIndicator={false}>
        <CreditCardInput onAddCard={() => true} />
        {cards.map((card) => (
          <CreditCardInput
            key={`card${card.id}`}
            card={card}
            primary={card.type === "VISA"}
            selected={selectedCard[0].id === card.id}
            onSelectCard={() =>
              setSelectedCard(cards.filter((c) => c.id === card.id))
            }
          />
        ))}
      </CardsList>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme: { space } }) => ({
    marginTop: space.l1,
    marginLeft: space.l1,
    height: constants.CDCARD_HEIGHT + space.l2,
  })}
`;

const CardsList = styled.ScrollView``;

export default CreditCardInputList;
