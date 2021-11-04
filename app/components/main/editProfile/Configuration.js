import styled from "styled-components";

import * as options from "../../../data/options";
import { Text } from "../../../styles";
import PickerGroup from "./PickerGroup";
import RoundPickerGroup from "./RoundPickerGroup";

const { genders, sizes, colorOptions, brands } = options;

const Configuration = () => {
  return (
    <Box>
      <Text caption opacity={0.7}>
        What type of you usually wear?
      </Text>
      <PickerGroup data={genders} radio initialState={[""]} />
      <Text caption opacity={0.7}>
        What is your clothing size?
      </Text>
      <RoundPickerGroup data={sizes} />
      <Text caption opacity={0.7}>
        My preferred clothing colors
      </Text>
      <RoundPickerGroup data={colorOptions} valueIsColor />
      <Text caption opacity={0.7}>
        My preferred brands
      </Text>
      <PickerGroup data={brands} initialState={[""]} />
    </Box>
  );
};

const Box = styled.ScrollView`
  ${({ theme: { space } }) => ({
    paddingLeft: space.l1,
  })}
`;

export default Configuration;
