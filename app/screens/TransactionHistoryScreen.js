import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';
import { HeaderBar } from '../components/main';
import { Graph } from '../components/main/transactionHistory';
import Text from '../components/styles/Text';
import View from '../components/styles/View';
import { colors } from '../config';
import graphData from '../data/graphData';

const TransactionHistoryScreen = ({ navigation }) => {
  return (
    <View container>
      <HeaderBar
        title="Transaction History"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'share-variant', onPress: () => true }}
      />
      <Heading>
        <Amount>
          <Total caption mbt>
            total spent
          </Total>
          <Text title2>$619,19</Text>
        </Amount>
        <Button
          bgColor={colors.purple}
          label="All Time"
          onPress={() => true}
          textStyle={{ color: colors.primary }}
          width={100}
        />
      </Heading>
      <Graph data={graphData} />
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

const Amount = styled.View``;

const Total = styled(Text)`
  text-transform: uppercase;

  ${({ theme: { colors } }) => ({
    color: colors.text2,
    opacity: 0.7,
  })}
`;

export default TransactionHistoryScreen;
