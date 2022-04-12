export const validateEmail = (email: string): boolean => {
  if (email !== undefined) {
    const regexp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regexp.test(email);
  } else {
    return false;
  }
};
