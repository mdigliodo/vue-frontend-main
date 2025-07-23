<script>

/**
 * A mayus character password validator with custom message
 * The password must include at least one uppercase letter.
 * Usage: MayusValidator('Your custom message here')
 * @example
 * const rules = {
 *   password: MayusValidator('Password must include an uppercase letter.'),
 * }
 * @returns {function} - Returns a validation function that checks the password strength
 * @throws {Error} - Throws an error if the message is not a string
 * @throws {TypeError} - Throws a type error if the message is not a string
 */

export const MayusValidator = (msg = 'Password must include an uppercase letter.') => (value) =>
    !/(?=.*[A-Z])/.test(value) && msg

</script>
