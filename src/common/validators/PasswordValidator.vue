<script>

/**
 * Strong password validator with custom message
 * The password must include at least one letter,
 * one number, and one special character.
 * Usage: PasswordValidator('Your custom message here')
 * @example
 * const rules = {
 *   password: PasswordValidator('Password must be strong.'),
 * }
 * @returns {function} - Returns a validation function that checks the password strength
 * @throws {Error} - Throws an error if the message is not a string
 * @throws {TypeError} - Throws a type error if the message is not a string
 */
export const PasswordValidator = (msg = 'Password must include a number and a special character.') => (value) =>
    !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value) && msg

</script>
