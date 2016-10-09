var snakeCaseRegex = /^([a-z]{1,})(_[a-z0-9]{1,})*$/;

/**
 * Check for valid snake case.
 * https://en.wikipedia.org/wiki/Snake_case
 *
 * Allowed characters are [a-z], [0-9] and _
 *
 * @param
 */
function isSnakeCase(input) {
  return snakeCaseRegex.test(input);
}

module.exports = isSnakeCase