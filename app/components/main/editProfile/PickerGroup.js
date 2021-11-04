import { useState } from "react";

import { View } from "../../../styles";
import Button from "../../Button";

const PickerGroup = ({ data, radio, initialState = [] }) => {
  const [selectedValues, setSelectedValues] = useState(initialState);

  return (
    <View pickerBox>
      {data.map((item, i) => {
        const index = selectedValues.indexOf(item.value);
        const isSelected = index !== -1;

        return (
          <View pkSpace key={i}>
            <Button
              primary={isSelected}
              label={item.label}
              onPress={() => {
                if (radio) setSelectedValues([item.value]);
                else {
                  if (isSelected) selectedValues.splice(index, 1);
                  else selectedValues.push(item.value);
                  setSelectedValues([...selectedValues]);
                }
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default PickerGroup;
