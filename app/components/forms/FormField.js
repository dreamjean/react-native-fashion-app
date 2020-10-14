import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import TextInput from '../TextInput';

const FormField = ({ name, ...rest }) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } = useFormikContext();

  return (
    <>
      <TextInput
        error={errors[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        touched={touched[name]}
        value={values[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
