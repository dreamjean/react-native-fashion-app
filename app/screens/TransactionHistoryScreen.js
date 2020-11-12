import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../components';
import { HeaderBar, ImgFooter } from '../components/main';
import { Graph, Transaction } from '../components/main/transactionHistory';
import Text from '../components/styles/Text';
import View from '../components/styles/View';
import { calendar, colors } from '../config';
import initialData from '../data/graphData';

const { CELL_NUM } = calendar;

const TransactionHistoryScreen = ({ navigation }) => {
  const [graphData, setGraphData] = useState(initialData);
  const [buttonLabel, setButtonLabel] = useState('Filter');

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
          label={buttonLabel}
          onPress={() => {
            let graphData = initialData;
            if (buttonLabel === 'All Time') {
              setButtonLabel('Filter');
              setGraphData(graphData);
            }
            if (buttonLabel === 'Filter') {
              setButtonLabel('All Time');
              setGraphData(graphData.filter((item) => item.value !== 0));
            }
          }}
          textStyle={{ color: colors.primary }}
          width={100}
        />
      </Heading>
      <Graph data={graphData} />

      <Wrapper>
        <Listing showsVerticalScrollIndicator={false}>
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
      </Wrapper>
      <ImgFooter />
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

const Listing = styled.ScrollView``;

const Wrapper = styled.View`
  flex: 1;
  overflow: hidden;
  margin-bottom: -${CELL_NUM}px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderBottomRightRadius: radii.xl,
  })}
`;

export default TransactionHistoryScreen;
