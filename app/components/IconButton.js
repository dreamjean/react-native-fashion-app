import { BorderlessButton } from "react-native-gesture-handler";

import Icon from "./Icon";

const IconButton = ({ onPress, style, ...rest }) => {
  return (
    <BorderlessButton style={style} onPress={onPress}>
      <Icon {...rest} />
    </BorderlessButton>
  );
};

export default IconButton;
