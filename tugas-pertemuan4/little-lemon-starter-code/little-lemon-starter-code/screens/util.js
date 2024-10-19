export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidFormat = emailPattern.test(email);
  const endsWithGmail = email.endsWith('@gmail.com');

  return isValidFormat && endsWithGmail;
};