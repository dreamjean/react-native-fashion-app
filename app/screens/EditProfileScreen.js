import styled from "styled-components";

import { FocusAwareStatusBar } from "../components";
import {
  Avatar,
  Configuration,
  HeaderBar,
  PersonalInfo,
  Tabs,
} from "../components/main";
import { View } from "../styles";

const tabs = [
  { id: "configuration", label: "Configuration" },
  { id: "info", label: "Personal Info" },
];

const EditProfileScreen = ({ navigation }) => {
  return (
    <View container>
      <View heading>
        <HeaderBar
          dark
          white
          title="Edit Profile"
          bgColor="transparent"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        />
      </View>
      <View bdBox />
      <Medium>
        <Avatar />
        <Tabs {...{ tabs }}>
          <Configuration />
          <PersonalInfo />
        </Tabs>
      </Medium>
      <FocusAwareStatusBar style="light" />
    </View>
  );
};

const Medium = styled.View`
  flex: 1;
  margin-top: -75px;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
  })}
`;

export default EditProfileScreen;
