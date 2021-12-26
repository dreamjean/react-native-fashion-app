const useFocusInput = () => {
  const inputs = [];

  const onRef = (field) => (input) => (inputs[field] = input);

  const focusNextField = (nextField) => inputs[nextField].focus();

  return { onRef, focusNextField };
};

export default useFocusInput;
