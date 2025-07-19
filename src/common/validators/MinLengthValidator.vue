<script>
/**
 * Validator for minimum length of a string
 * Usage: MinLength
 * @param {number} len - The minimum length required
 * @param {string} msg - The error message to return if validation fails
 * @returns {string|null} - Returns the error message if validation fails, otherwise null
 */
export const MinLength = (len, msg = 'Min length not met') => (value) =>
    value && value.length < len && msg

</script>
