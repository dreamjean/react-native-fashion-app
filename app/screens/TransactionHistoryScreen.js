import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';
import { HeaderBar } from '../components/main';
import { Graph, Transaction } from '../components/main/transactionHistory';
import Image from '../components/styles/Image';
import Text from '../components/styles/Text';
import View from '../components/styles/View';
import { calendar, colors, images } from '../config';
import graphData from '../data/graphData';

const { CELL_NUM, FOOTER_IMGH } = calendar;

const TransactionHistoryScreen = ({ navigation }) => {
  const converAmountFormat = () => {
    return graphData
      .map((p) => p.value)
      .reduce((a, b) => a + b)
      .toFixed(2)
      .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  };

  return (
    <View container>
      <HeaderBar
        title="Transaction History"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'share-variant', onPress: () => true }}
      />
      <Heading>
        <Box>
          <Amount caption mbt>
            total spent
          </Amount>
          <Text title2>${converAmountFormat()}</Text>
        </Box>
        <Button
          bgColor={colors.purple}
          label="All Time"
          onPress={() => true}
          textStyle={{ color: colors.primary }}
          width={100}
        />
      </Heading>
      <Graph data={graphData} />

      <Listing>
        {graphData.map((item, index) => (
          <Transaction
            key={index}
            color={item.color}
            date={item.date}
            id={item.id}
            value={item.value}
          />
        ))}
      </Listing>

      <View bdBox>
        <Image topCurve source={images[6]} />
      </View>
      <Footer>
        <Image source={images[6]} />
      </Footer>
    </View>
  );
};

const Heading = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.l1,
    marginTop: space.m1,
  })}
`;

const Box = styled.View``;

const Amount = styled(Text)`
  text-transform: uppercase;

  ${({ theme: { colors } }) => ({
    color: colors.text2,
    opacity: 0.7,
  })}
`;

const Listing = styled.ScrollView`
  flex: 1;
  margin-bottom: -${CELL_NUM}px;
  overflow: hidden;

  ${({ theme: { colors, space, radii } }) => ({
    backgroundColor: colors.white,
    borderBottomRightRadius: radii.xl,
    paddingBottom: space.m1,
  })}
`;

const Footer = styled.View`
  height: ${FOOTER_IMGH}px;
  overflow: hidden;

  ${({ theme: { radii } }) => ({
    borderTopLeftRadius: radii.xl,
  })}
`;

export default TransactionHistoryScreen;
