import React, { useState } from 'react';
import styled from 'styled-components';

import { CartContainer, HeaderBar, ListItem, TopContent } from '../components/main';
import Text from '../components/styles/Text';

const listing = [
  {
    id: 1,
    size: 'M',
    price: '29.99',
  },
  {
    id: 2,
    size: 'M',
    price: '29.99',
  },
  {
    id: 3,
    size: 'M',
    price: '29.99',
  },
  {
    id: 4,
    size: 'M',
    price: '29.99',
  },
  {
    id: 5,
    size: 'M',
    price: '29.99',
  },
];

const CartScreen = ({ navigation }) => {
  const [items, setItems] = useState(listing);

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <CartContainer>
      <TopContent />

      <HeaderBar
        dark
        white
        title="Shopping Cart"
        left={{ icon: 'backspace-outline', onPress: () => navigation.goBack() }}
        right={{ icon: 'cart', onPress: () => true }}
      />
      <Text title3 center white style={{ marginTop: 6 }}>
        4 Items Added
      </Text>

      <Wrapper>
        <Listing
          data={items}
          keyExtractor={(list) => list.id.toString()}
          contentContainerStyle={{ paddingVertical: 20 }}
          renderItem={({ item }) => <ListItem item={item} onDelete={() => handleDelete(item)} />}
          showsVerticalScrollIndicator={false}
        />
      </Wrapper>
    </CartContainer>
  );
};

const Wrapper = styled.View`
  flex: 1;
  z-index: -1;

  ${({ theme: { space } }) => ({
    marginBottom: space.xl,
  })}
`;

const Listing = styled.FlatList``;

export default CartScreen;
