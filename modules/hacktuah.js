/**
 * `yappatron` - Throws a custom error with a Gen Z twist.
 *
 * @function
 * @param {string} message - The error message to throw.
 */
function yappatron(message) {
  throw new Error(`Yappatron says: ${message}`);
}

/**
 * `hack` function to begin a Gen Z-flavored try/catch block.
 * @param {Function} tryBlock - The function to try in the block.
 * @returns {{ tuah: Function }} - A handler for catching errors.
 */
function hack(tryBlock) {
  try {
    tryBlock();
  } catch (e) {
    return {
      /**
       * `tuah` function to catch errors.
       * @param {Function} catchBlock - The function to handle caught errors.
       */
      tuah(catchBlock) {
        catchBlock(e);
      },
    };
  }
  return {
    tuah() {}, // No error, no action
  };
}

export { yappatron, hack };
