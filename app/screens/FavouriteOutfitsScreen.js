import React, { useRef, useState } from 'react';
import { Transition, Transitioning } from 'react-native-reanimated';
import styled from 'styled-components';

import { HeaderBar, Outfits, PressFooter, TopCurve } from '../components/main';
import View from '../components/styles/View';
import { calendar } from '../config';
import initialOutfits from '../data/outfits';

const { FOOTER_HEIGHT } = calendar;

const FavouriteOutfitsScreen = ({ navigation }) => {
  const [outfits, setOutfits] = useState(initialOutfits);
  const list = useRef();

  const transition = (
    <Transition.Together>
      <Transition.Change interpolation="easeInOut" durationMs={800} />
    </Transition.Together>
  );

  return (
    <View container>
      <HeaderBar
        title="Outfit Ideas"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping', onPress: () => true }}
      />
      <ScrollOutfits>
        <Transitioning.View ref={list} transition={transition}>
          <Wrapper>
            <Outfits data={outfits.filter(({ id }) => id % 2 === 0)} />
            <Outfits data={outfits.filter(({ id }) => id % 2 !== 0)} />
          </Wrapper>
        </Transitioning.View>
      </ScrollOutfits>
      <TopCurve />
      <FooterBox>
        <PressFooter
          height={FOOTER_HEIGHT}
          label="Add to Favorites"
          onPress={() => {
            list.current.animateNextTransition();
            setOutfits(outfits.filter((outfit) => !outfit.selected));
          }}
        />
      </FooterBox>
    </View>
  );
};

const ScrollOutfits = styled.ScrollView`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginTop: space.m1,
  })}
`;

const Wrapper = styled.View`
  flex-direction: row;
  padding-bottom: ${FOOTER_HEIGHT}px;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m1,
  })}
`;

const FooterBox = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default FavouriteOutfitsScreen;
