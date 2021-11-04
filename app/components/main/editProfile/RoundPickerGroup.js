import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { constants } from "../../../config";
import { Text, View } from "../../../styles";

const { ROUND_PICKER } = constants;
const wpRadius = ROUND_PICKER + 6;

const RoundPickerGroup = ({ data, valueIsColor }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <View pickerBox>
      {data.map(({ value }, i) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;

        return (
          <View pkSpace key={i}>
            <Pressable
              onPress={() => {
                if (isSelected) selectedValues.splice(index, 1);
                else selectedValues.push(value);
                setSelectedValues([...selectedValues]);
              }}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Wrapper {...{ isSelected }}>
                <Box {...{ isSelected, valueIsColor, value }}>
                  {!valueIsColor && (
                    <Text caption upper white={isSelected}>
                      {value}
                    </Text>
                  )}
                  {valueIsColor && isSelected && (
                    <Feather name="check" size={20} color="white" />
                  )}
                </Box>
              </Wrapper>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const Wrapper = styled.View`
  width: ${wpRadius * 2}px;
  height: ${wpRadius * 2}px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-radius: ${wpRadius}px;

  ${({ isSelected, theme: { colors } }) => ({
    backgroundColor: colors.white,
    borderColor: isSelected ? colors.grey : colors.white,
  })}
`;

const Box = styled.View`
  width: ${ROUND_PICKER * 2}px;
  height: ${ROUND_PICKER * 2}px;
  border-radius: ${ROUND_PICKER}px;
  justify-content: center;
  align-items: center;

  ${({ isSelected, valueIsColor, value, theme: { colors } }) => ({
    backgroundColor: valueIsColor
      ? value
      : isSelected
      ? colors.primary
      : colors.grey,
  })}
`;

export default RoundPickerGroup;
