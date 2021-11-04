import { Formik } from "formik";

const Form = ({ children, ...rest }) => {
  return <Formik {...rest}>{() => <>{children}</>}</Formik>;
};

export default Form;
