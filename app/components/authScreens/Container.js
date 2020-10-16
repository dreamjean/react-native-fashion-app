import React from 'react';
import styled from 'styled-components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { useNavigation } from '@react-navigation/native';

import Image from '../styles/Image';
import calendar from '../../config/calendar';
import { isIos } from '../../config/theme';
import Icon from '../Icon';
import colors from '../../config/colors';
import { StatusBar } from 'expo-status-bar';

const { BAR_HEIGHT, IMG_HEIGHT } = calendar;
const images = [
  require('../../assets/bg1.png'),
  require('../../assets/bg2.png'),
  require('../../assets/bg3.png'),
];

const Container = ({
  children,
  pattern,
  imgLbr = false,
  imgRbr = false,
  ltBorder = false,
  rtBorder = false,
}) => {
  const navigation = useNavigation();
  const img = images[pattern];

  return (
    <Box>
      <StatusBar style="dark" />
      <Header>
        <ImageBox {...{ imgLbr, imgRbr }}>
          <Image header source={img} />
          <CloseButton activeOpacity={0.6} onPress={() => navigation.goBack()}>
            <Icon
              backgroundColor={colors.white}
              color={colors.primary}
              iconRatio={0.8}
              iconName="arrow-left-bold-outline"
              size={40}
            />
          </CloseButton>
        </ImageBox>
        <Border>
          <Image border source={img} />
        </Border>
      </Header>
      <Medium {...{ ltBorder, rtBorder }}>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutoAutomaticScrol={isIos}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
        >
          <MediumBox>{children}</MediumBox>
        </KeyboardAwareScrollView>
      </Medium>
    </Box>
  );
};

const Box = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.secondary,
  })};
`;

const Header = styled.View`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })};
`;

const ImageBox = styled.View`
  width: 100%;
  overflow: hidden;
  height: ${BAR_HEIGHT}px;

  ${({ imgLbr, imgRbr, theme: { radii } }) => ({
    borderBottomLeftRadius: imgLbr ? radii.xl : radii.n,
    borderBottomRightRadius: imgRbr ? radii.xl : radii.n,
  })}
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 25px;
`;

const Border = styled.View`
  overflow: hidden;
`;

const Medium = styled.View`
  flex: 1;
  margin-top: -${IMG_HEIGHT}px;

  ${({ ltBorder, rtBorder, theme: { colors, radii, space } }) => ({
    backgroundColor: colors.white,
    borderRadius: radii.xl,
    borderTopLeftRadius: ltBorder ? radii.xl : radii.n,
    borderTopRightRadius: rtBorder ? radii.xl : radii.n,
    padding: space.xxl,
  })}
`;

const MediumBox = styled.View`
  flex: 1;
  align-items: center;
`;

export default Container;
