import { useState, useCallback } from "react";

export const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: `${
        target.validity.valid
          ? ""
          : `${`Invalid ${name}${
              target.validity.tooShort && name === "password"
                ? ". Please include 8-30 characters."
                : ""
            }
           ${
             target.validity.tooShort && name === "username"
               ? ". Please include 2-30 characters."
               : ""
           }
        `}`
      }`,
    });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetForm };
};
