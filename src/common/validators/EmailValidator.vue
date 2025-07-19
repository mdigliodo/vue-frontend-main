<script>
/**
 * Validator for email fields
 * Usage: EmailValidator
 * @param {string} value - The value to validate
 * @param {string} message - The error message to return if validation fails
 * @returns {string|null} - Returns the error message if validation fails, otherwise null
 */
export const EmailValidator = (msg = 'This field must be a valid email.') => (value) =>
  value && !/^[^@]+@[^@]+\.[^@]+$/.test(value) && msg

</script>
