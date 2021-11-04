import { useRef, useState } from "react";
import styled from "styled-components";

import { FocusAwareStatusBar } from "../components";
import {
  CartContainer,
  CheckOut,
  HeaderBar,
  ListItem,
  TopContent,
} from "../components/main";
import { colors, constants } from "../config";
import cartItems from "../data/cartItems";
import { Text } from "../styles";

const { CART_BAR_HEIGHT, CART_MIN_HEIGHT } = constants;

const CartScreen = ({ navigation }) => {
  const [items, setItems] = useState(cartItems);
  const scrollView = useRef();

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <Container>
      <HeaderWrapper>
        <TopContent />

        <HeaderBar
          dark
          white
          title="Shopping Cart"
          left={{
            icon: "backspace-outline",
            onPress: () => navigation.goBack(),
          }}
          right={{ icon: "cart", onPress: () => true }}
        />
        <Text title3 center white style={{ marginTop: 6 }}>
          <Text title1 style={{ color: colors.blue }}>
            5
          </Text>{" "}
          Items Added
        </Text>
      </HeaderWrapper>
      <CheckOut topHeight={CART_MIN_HEIGHT} />
      <CartContainer>
        <Wrapper>
          <Listing
            ref={scrollView}
            contentContainerStyle={{
              paddingTop: CART_BAR_HEIGHT,
              paddingBottom: 20,
            }}
            onContentSizeChange={() =>
              scrollView.current.scrollToEnd({ animated: true, duration: 500 })
            }
            showsVerticalScrollIndicator={false}
          >
            {items.map((item) => (
              <ListItem
                key={`list${item.id}`}
                item={item}
                onRemove={handleDelete}
              />
            ))}
          </Listing>
        </Wrapper>
      </CartContainer>
      <FocusAwareStatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const HeaderWrapper = styled.View`
  position: absolute;
  width: 100%;
  z-index: 5;

  ${({ theme: { radii } }) => ({
    borderBottomLeftRadius: radii.xl,
  })}
`;

const Wrapper = styled.View`
  overflow: hidden;

  ${({ theme: { space, radii } }) => ({
    borderBottomRightRadius: radii.xl,
    borderBottomLeftRadius: radii.xl,
    paddingBottom: space.xl + space.s1,
  })}
`;

const Listing = styled.ScrollView``;

export default CartScreen;
