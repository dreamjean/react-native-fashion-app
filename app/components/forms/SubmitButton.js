import { useFormikContext } from "formik";

import Button from "../Button";

const SubmitButton = ({ label }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      label={label}
      primary
      space
      paddingHorizontal={40}
      textStyle={{ textTransform: "none" }}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
