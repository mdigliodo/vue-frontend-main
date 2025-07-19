<script>

/**
 * SameAs(key, msg)(value, form)
 * @Param key   -> name of the sibling field to compare with
 * @Param msg   -> custom error message
 * @returns {function} - Returns a validation function that yields the message when the
 * two values are different.
 * Usage: SameAs('password', 'Los campos no coinciden')
 * @example
 * const rules = {
 *   confirmPassword: SameAs('password', 'Passwords do not match.'),
 * }
 */
export const SameAs = (key, msg = 'Passwords do not match.') => {
  return (value, form) => {
    const target = form?.[key]
    return value !== target ? msg : null
  }
}

</script>
