import styled from "styled-components";

import { colors } from "../../../config";
import { creditCards } from "../../../data/creditCards";
import { Text } from "../../../styles";
import Button from "../../Button";
import CombinationButton from "../CombinationButton";
import CreditCardInputList from "./creditCards/CreditCardInputList";

const CheckOut = ({ topHeight }) => {
  return (
    <Container {...{ topHeight }}>
      <CreditCardInputList cards={creditCards} />
      <Box>
        <Info>Delivery address</Info>
        <InfoBox>
          <Info mtp caption opacity={0.55}>
            Unit 15,YorkFarmBusiness Centre,Watling St.Towceter
          </Info>
          <Button
            label="Change"
            bgColor="transparent"
            paddingHorizontal={0}
            textStyle={{ color: colors.lightGrey2 }}
            onPress={() => true}
          />
        </InfoBox>
        <InfoBox>
          <Info mtp>
            Total Items <Text style={{ color: colors.lightGrey2 }}>(6)</Text>
          </Info>
          <Price mtp>$189.94</Price>
        </InfoBox>
        <InfoBox>
          <Info>Standard Delivery</Info>
          <Price>$12.00</Price>
        </InfoBox>
        <InfoBox>
          <Info>Total Payment</Info>
          <Price>$201.84</Price>
        </InfoBox>
        <Wrapper>
          <CombinationButton label="Swipe to Pay $201.84" onPay={() => true} />
        </Wrapper>
      </Box>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  z-index: -5;

  ${({ topHeight, theme: { colors } }) => ({
    backgroundColor: colors.secondary,
    paddingTop: topHeight,
  })}
`;

const Box = styled.ScrollView`
  ${({ theme: { space } }) => ({
    paddingHorizontal: space.l1,
    paddingVertical: space.m1,
  })}
`;

const InfoBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginVertical: space.s1,
  })}
`;

const Info = styled(Text)`
  flex: 1;

  ${({ theme: { colors } }) => ({
    color: colors.white,
  })}
`;

const Price = styled(Text)`
  ${({ theme: { colors } }) => ({
    color: colors.primary,
  })}
`;

const Wrapper = styled.View`
  align-items: center;

  ${({ theme: { space } }) => ({
    marginTop: space.l2,
  })}
`;

export default CheckOut;
