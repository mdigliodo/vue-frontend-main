<script>

/**
 * Validator for required fields
 * Usage: RequiredValidator
 * @param {string} key - The key of the field to validate
 * @param {Object} formData - The form data object containing the field values
 * @param {string} message - The error message to return if validation fails
 * @returns {string|null} - Returns the error message if validation fails, otherwise null
 */
export const RequiredValidator = (msg = 'This field is required.') => (value) =>
  !value && msg

</script>
