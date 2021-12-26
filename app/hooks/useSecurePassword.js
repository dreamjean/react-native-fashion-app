import { useState } from "react";

const usePasswordVisibility = () => {
  const [securePassword, setSecurePassword] = useState(true);

  const handlePasswordVisibility = () => setSecurePassword((prev) => !prev);

  return {
    securePassword,
    handlePasswordVisibility,
  };
};

export default usePasswordVisibility;
