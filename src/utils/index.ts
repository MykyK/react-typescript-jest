const emailRegex = new RegExp(/\S+@\S+\.\S+/);

export const emailValidator = (value: string): string =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";


