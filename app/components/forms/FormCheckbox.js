import { useFormikContext } from "formik";
import React from "react";

import Checkbox from "../Checkbox";

const FormCheckbox = ({ name, title }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <Checkbox
      checked={values[name]}
      title={title}
      onPress={() => setFieldValue(name, !values[name])}
    />
  );
};

export default FormCheckbox;
