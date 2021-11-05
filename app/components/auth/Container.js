import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styled from "styled-components";

import { colors, constants } from "../../config";
import { Image } from "../../styles";
import IconButton from "../IconButton";

const { BAR_HEIGHT, IMG_HEIGHT } = constants;

const Container = ({
  children,
  image,
  imgLbr = false,
  imgRbr = false,
  ltBorder = false,
  rtBorder = false,
}) => {
  const navigation = useNavigation();

  return (
    <Box>
      <StatusBar style="dark" />
      <Header>
        <ImageBox {...{ imgLbr, imgRbr }}>
          <Image source={image} />
          <CloseButton
            onPress={() => navigation.goBack()}
            backgroundColor={colors.white}
            color={colors.primary}
            iconRatio={0.8}
            iconName="arrow-left-bold-outline"
            size={40}
          />
        </ImageBox>
        <Border>
          <Image barCurve source={image} />
        </Border>
      </Header>
      <Medium {...{ ltBorder, rtBorder }}>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          extraScrollHeight={100}
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

const CloseButton = styled(IconButton)`
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
    padding: space.xl,
  })}
`;

const MediumBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Container;
