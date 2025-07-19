<script>
/**
 * Validator for maximum length of a string
 * Usage: MaxLength
 * @param {number} len - The maximum length allowed
 * @param {string} msg - The error message to return if validation fails
 * @returns {string|null} - Returns the error message if validation fails, otherwise null
 */
export const MaxLength = (len, msg = 'Max length exceeded') => (value) =>
    value && value.length > len && msg

</script>
