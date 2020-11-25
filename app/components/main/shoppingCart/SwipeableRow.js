import React, { useRef } from 'react';
import { Alert } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import LeftAction from './LeftAction';
import RightAction from './RightAction';

const SwipeableRow = ({ children, onRemoveItem }) => {
  const swipeableRow = useRef();
  const handleLeftPress = () => {
    swipeableRow.current.close();
    Alert.alert('Remove Item', 'Are you share you want to delete this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: (item) => onRemoveItem(item),
      },
    ]);
  };

  return (
    <Swipeable
      ref={swipeableRow}
      containerStyle={{ marginTop: 18 }}
      friction={2}
      leftThreshold={80}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderLeftActions={(props) => <LeftAction {...props} onPress={handleLeftPress} />}
      renderRightActions={(props) => <RightAction {...props} text="update" color="cyan" />}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;
