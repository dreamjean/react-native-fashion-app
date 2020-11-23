import React from 'react';
import styled from 'styled-components';

import * as options from '../../../data/options';
import Text from '../../styles/Text';
import PickerGroup from './PickerGroup';
import RoundPickerGroup from './RoundPickerGroup';

const Configuration = () => {
  return (
    <Box>
      <Text caption opacity={0.7}>
        What type of you usually wear?
      </Text>
      <PickerGroup data={options.genders} radio />
      <Text caption opacity={0.7}>
        What is your clothing size?
      </Text>
      <RoundPickerGroup data={options.sizes} />
      <Text caption opacity={0.7}>
        My preferred clothing colors
      </Text>
      <RoundPickerGroup data={options.colorOptions} valueIsColor />
      <Text caption opacity={0.7}>
        My preferred brands
      </Text>
      <PickerGroup data={options.brands} />
    </Box>
  );
};

const Box = styled.ScrollView`
  ${({ theme: { space } }) => ({
    paddingLeft: space.l1,
  })}
`;

export default Configuration;
