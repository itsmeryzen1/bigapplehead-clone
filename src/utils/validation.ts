// Form validation utility functions

/**
 * Validates an email address
 * @param email Email address to validate
 * @returns Boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a name (first or last)
 * @param name Name to validate
 * @returns Boolean indicating if the name is valid
 */
export const isValidName = (name: string): boolean => {
  return name.trim().length >= 2;
};

/**
 * Validates a message
 * @param message Message to validate
 * @param minLength Minimum message length (defaults to 10)
 * @returns Boolean indicating if the message is valid
 */
export const isValidMessage = (message: string, minLength = 10): boolean => {
  return message.trim().length >= minLength;
};

/**
 * Validates a review amount
 * @param amount Review amount to validate
 * @returns Boolean indicating if the amount is valid
 */
export const isValidReviewAmount = (amount: number): boolean => {
  return amount >= 5 && amount <= 500 && Number.isInteger(amount);
};

/**
 * Validates a contact form submission
 * @param formData Contact form data to validate
 * @returns Object containing validation result and any error messages
 */
export const validateContactForm = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!isValidName(formData.firstName)) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  if (!isValidName(formData.lastName)) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isValidMessage(formData.message)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Validates a buy reviews form submission
 * @param formData Buy reviews form data to validate
 * @returns Object containing validation result and any error messages
 */
export const validateBuyReviewsForm = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  reviewAmount: number;
  couponCodes: string[];
}): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!isValidName(formData.firstName)) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  if (!isValidName(formData.lastName)) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isValidMessage(formData.message)) {
    errors.message = 'Additional information must be at least 10 characters';
  }

  if (!isValidReviewAmount(formData.reviewAmount)) {
    errors.reviewAmount = 'Review amount must be between 5 and 500';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
