import { LOG_LEVEL_ALL, LOG_LEVEL_ERROR_ONLY, LOG_LEVEL_WARN_ERROR } from "config/config";

/**
 * Utility class for logging messages with different severity levels.
 *
 * The `LOGGER` class provides methods for logging messages at different severity levels, including
 * informational, warning, and error messages. The logging level can be configured to control which
 * types of messages are output.
 *
 * @remarks
 * The `LOGGER` class has the following static properties and methods:
 * - `level`: Represents the logging level configuration. Valid values are `LOG_LEVEL_ALL`,
 *   `LOG_LEVEL_WARN_ERROR`, and `LOG_LEVEL_ERROR_ONLY`.
 * - `info(clazz: { name: string }, text: string): void`: Logs an informational message.
 * - `warn(clazz: { name: string }, text: string): void`: Logs a warning message.
 * - `error(clazz: { name: string }, text: string): void`: Logs an error message.
 *
 * @example
 * ```typescript
 * // Configure the logger to output only warning and error messages
 * LOGGER.level = LOG_LEVEL_WARN_ERROR;
 *
 * // Log an informational message
 * LOGGER.info(MyClass, "An informational message.");
 *
 * // Log a warning message
 * LOGGER.warn(MyClass, "A warning occurred!");
 *
 * // Log an error message
 * LOGGER.error(MyClass, "An error occurred!");
 * ```
 */
export class LOGGER {
  /**
   * Logging level configuration.
   *
   * This property represents the logging level configuration for the logger. It determines which
   * types of log messages (info, warning, error) should be output based on their severity.
   *
   * @remarks
   * Valid values for the logging level are:
   * - `LOG_LEVEL_ALL`: Outputs all types of log messages.
   * - `LOG_LEVEL_WARN_ERROR`: Outputs warning and error messages only.
   * - `LOG_LEVEL_ERROR_ONLY`: Outputs error messages only.
   *
   * @example
   * ```typescript
   * Logger.level = LOG_LEVEL_WARN_ERROR; // Set logging level to output warnings and errors only.
   * ```
   */
  static level: number = LOG_LEVEL_ALL;
  /**
   * Logs an informational message.
   *
   * This method logs an informational message with the specified class name, text, and timestamp.
   * The log will only be output if the logger's level is set to include informational messages.
   *
   * @param clazz The class calling the method. The class name will be extracted automatically.
   * @param text The text of the informational message.
   *
   * @example
   * ```typescript
   * Logger.info(MyClass, "An informational message.");
   * ```
   */
  static info(clazz: String, text: String) {
    if (LOGGER.level >= LOG_LEVEL_ALL) {
      console.log(`[WARN] ${Game.time} - ${clazz} - ${text}`);
    }
  }

  /**
   * Logs a warning message.
   *
   * This method logs a warning message with the specified class name, text, and timestamp.
   * The log will only be output if the logger's level is set to include warning messages.
   *
   * @param clazz The class calling the method. The class name will be extracted automatically.
   * @param text The text of the warning message.
   *
   * @example
   * ```typescript
   * Logger.warn(MyClass, "A warning occurred!");
   * ```
   */
  static warn(clazz: String, text: String) {
    if (LOGGER.level >= LOG_LEVEL_WARN_ERROR) {
      console.log(`[WARN] ${Game.time} - ${clazz} - ${text}`);
    }
  }

  /**
   * Logs an error message.
   *
   * This method logs an error message with the specified class name, text, and timestamp.
   * The log will only be output if the logger's level is set to include error messages.
   *
   * @param clazz The class name or identifier calling the method.
   * @param text The text of the error message.
   *
   * @example
   * ```typescript
   * Logger.error("MyClass", "An error occurred!");
   * ```
   */
  static error(clazz: String, text: String) {
    if (LOGGER.level >= LOG_LEVEL_ERROR_ONLY) {
      console.log(`[ERROR] ${Game.time} - ${clazz} - ${text}`);
    }
  }
}
