import { useFormikContext } from 'formik';
import React from 'react';

import Button from '../Button';

const SubmitButton = ({ label }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      label={label}
      primary
      space
      textStyle={{ textTransform: 'none' }}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
