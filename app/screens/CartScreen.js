import React, { useState } from 'react';
import styled from 'styled-components';

import { CartContainer, CheckOut, HeaderBar, ListItem, TopContent } from '../components/main';
import cartItems from '../data/cartItems';
import { Text } from '../styles';

const CartScreen = ({ navigation }) => {
  const [items, setItems] = useState(cartItems);

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <CartContainer CheckOutComponent={CheckOut}>
      <TopContent />

      <HeaderBar
        dark
        white
        title="Shopping Cart"
        left={{ icon: 'backspace-outline', onPress: () => navigation.toggleDrawer() }}
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
          renderItem={({ item }) => <ListItem item={item} onRemove={handleDelete} />}
          showsVerticalScrollIndicator={false}
        />
      </Wrapper>
    </CartContainer>
  );
};

const Wrapper = styled.View`
  flex: 1;
  z-index: -1;
  overflow: hidden;

  ${({ theme: { space, radii } }) => ({
    borderBottomRightRadius: radii.xl,
    borderBottomLeftRadius: radii.xl,
    paddingBottom: space.xl + space.s1,
  })}
`;

const Listing = styled.FlatList``;

export default CartScreen;
