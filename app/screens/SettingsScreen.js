import styled from "styled-components";

import { ImgUnderFill } from "../components";
import { HeaderBar, Notification } from "../components/main";
import notifications from "../data/notifications";

const SettingsScreen = ({ navigation }) => {
  return (
    <ImgUnderFill>
      <Medium>
        <HeaderBar
          title="Notifications"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        />
        <Listing
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Notification title={item.title} description={item.description} />
          )}
        />
      </Medium>
    </ImgUnderFill>
  );
};

const Medium = styled.View`
  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

const Listing = styled.FlatList`
  ${({ theme: { space } }) => ({
    paddingTop: space.l1,
  })}
`;

export default SettingsScreen;
