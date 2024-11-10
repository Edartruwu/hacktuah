/**
 * Yap function - a Gen Z-inspired logging wrapper for console methods.
 *
 * @module yap
 */

/**
 * Primary `yap` function for logging to the console.
 *
 * @function
 * @param {...any} yapParams - Parameters to log.
 */
function yap(...yapParams) {
  console.log(...yapParams);
}

/**
 * `yap.error` for logging errors to the console.
 *
 * @function
 * @param {...any} yapParams - Parameters to log as an error.
 */
yap.error = function (...yapParams) {
  console.error(...yapParams);
};

/**
 * `yap.warn` for logging warnings to the console.
 *
 * @function
 * @param {...any} yapParams - Parameters to log as a warning.
 */
yap.warn = function (...yapParams) {
  console.warn(...yapParams);
};

/**
 * `yap.info` for logging informational messages to the console.
 *
 * @function
 * @param {...any} yapParams - Parameters to log as info.
 */
yap.info = function (...yapParams) {
  console.info(...yapParams);
};

export { yap };
