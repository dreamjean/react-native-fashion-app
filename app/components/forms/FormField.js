import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, onSubmitEditing, onRef, ...rest }) => {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
    handleSubmit,
  } = useFormikContext();

  return (
    <>
      <TextInput
        error={errors[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        onSubmitEditing={onSubmitEditing ? onSubmitEditing : handleSubmit}
        ref={onRef}
        touched={touched[name]}
        value={values[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
