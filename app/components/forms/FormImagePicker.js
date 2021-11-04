import { useFormikContext } from "formik";

import ImageInput from "../ImageInput";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  return (
    <>
      <ImageInput
        image={values[name]}
        onChangeImage={(uri) => setFieldValue(name, uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
