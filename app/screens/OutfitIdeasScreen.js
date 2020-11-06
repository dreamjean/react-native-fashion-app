import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { sub } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash/lib/module/v1';
import styled from 'styled-components';

import { HeaderBar } from '../components';
import { BackgroundStyled, Card, CategoryBar } from '../components/outfitIdeas';
import cards from '../data/cards';

const step = 1 / (cards.length - 1);

const OutfitIdeasScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  return (
    <Container>
      <StatusBar style="dark" />
      <HeaderBar
        title="Outfit Ideas"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping', onPress: () => true }}
      />

      <CategoryBar />
      <Box>
        <BackgroundStyled />
        {cards.map(
          ({ index, image }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{ image, step }}
              />
            )
        )}
      </Box>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const Box = styled.View`
  flex: 1;
`;

export default OutfitIdeasScreen;
