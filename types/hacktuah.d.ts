/**
 * `yappatron` - Throws a custom error with a Gen Z twist.
 *
 * @param message - The error message to throw.
 * @throws {Error} with a prefixed message.
 */
export function yappatron(message: string): never;

/**
 * `hack` - Begins a Gen Z-flavored try/catch block.
 *
 * @param tryBlock - The function to try in the block.
 * @returns A handler for catching errors.
 */
export function hack(tryBlock: () => void): {
  tuah: (catchBlock: (error: Error) => void) => void;
};
