/**
 * Primary `yap` function for logging to the console.
 *
 * @param yapParams - Parameters to log.
 */
export function yap(...yapParams: any[]): void;

/**
 * `yap.error` for logging errors to the console.
 *
 * @param yapParams - Parameters to log as an error.
 */
export namespace yap {
  function error(...yapParams: any[]): void;
  function warn(...yapParams: any[]): void;
  function info(...yapParams: any[]): void;
}
