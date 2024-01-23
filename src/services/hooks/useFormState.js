import * as React from 'react';

export const useFormState = (initState) => {
  const [validForm, setValidForm] = React.useState(initState);
  const emailReg =
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const hasError = (value, key) => {
    switch (key) {
      case 'email':
        return !value.match(emailReg);
      default:
        return value === '';
    }
  };
  const setForm = (key, value) =>
    setValidForm({
      ...validForm,
      [key]: {
        ...validForm[key],
        value,
        hasError: hasError(value, key),
      },
    });
  return [validForm, setForm];
};
