import React, { useState } from 'react';

import Button from '../../Button';
import View from '../../styles/View';

const PickerGroup = ({ data, radio }) => {
  const [selectedValues, setSelectedValues] = useState([]);

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
