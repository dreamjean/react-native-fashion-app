import Constants from 'expo-constants';
import styled from 'styled-components';

import { isIos } from '../../config/theme';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${isIos ? 0 : Constants.statusBarHeight}px;
`;
export default SafeAreaView;
