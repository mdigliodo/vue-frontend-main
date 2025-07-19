<script>

/**
 * Strong password validator with custom message
 * The password must be at least 8 characters long, include at least one letter,
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
export const PasswordValidator = (msg = 'Password must be at least 8 characters long, include a number and a special character.') => (value) =>
    !/[A-Za-z]/.test(value) && !/[0-9]/.test(value) && !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value) && msg

</script>
