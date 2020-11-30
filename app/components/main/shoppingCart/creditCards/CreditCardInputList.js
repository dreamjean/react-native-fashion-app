import React from 'react';
import styled from 'styled-components';

import { calendar } from '../../../../config';
import CreditCardInput from './CreditCardInput';

const CreditCardInputList = ({ cards = [] }) => {
  return (
    <Container>
      <CardsList horizontal showsHorizontalScrollIndicator={false}>
        <CreditCardInput onAddCard={() => true} />
        {cards.map((card) => (
          <CreditCardInput
            key={card.id}
            card={card}
            primary={card.type === 'VISA'}
            onChangeCard={() => true}
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
    height: calendar.CDCARD_HEIGHT + space.l2,
  })}
`;

const CardsList = styled.ScrollView``;

export default CreditCardInputList;
