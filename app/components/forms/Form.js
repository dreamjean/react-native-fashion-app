import { Formik } from "formik";
import React from "react";

const Form = ({ children, ...rest }) => {
  return <Formik {...rest}>{() => <>{children}</>}</Formik>;
};

export default Form;
