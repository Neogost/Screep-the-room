// logger.test.ts
import { expect } from "chai";
import { LOG_LEVEL_ALL, LOG_LEVEL_WARN_ERROR, LOG_LEVEL_ERROR_ONLY } from "config/config";
import * as sinon from "sinon";
import { LOGGER } from "utils/logger";

describe("LOGGER.error", () => {
  beforeEach(() => {
    // runs before each test in this block
    //setupGlobal();
    // Réinitialiser le niveau de log avant chaque test
    LOGGER.level = LOG_LEVEL_ALL;
  });

  it("should log an error when level is LOG_LEVEL_ERROR_ONLY", () => {
    // Configurer le niveau de log pour inclure les erreurs uniquement
    LOGGER.level = LOG_LEVEL_ERROR_ONLY;

    // Utiliser un spy pour espionner la console.error
    const consoleErrorSpy = sinon.spy(console, "error");

    // Appeler la méthode error
    LOGGER.error("TestClass", "Test error message");

    // Vérifier si console.error a été appelé avec le message attendu
    expect(consoleErrorSpy).to.have.been.calledWith("[ERROR] expect.any(Number) - TestClass - Test error message");

    // Restaurer la fonction originale de console.error
    consoleErrorSpy.restore();
  });

  it("should not log an error when level is LOG_LEVEL_WARN_ERROR", () => {
    // Configurer le niveau de log pour inclure les avertissements et les erreurs
    LOGGER.level = LOG_LEVEL_WARN_ERROR;

    // Utiliser un spy pour espionner la console.error
    const consoleErrorSpy = sinon.spy(console, "error");

    // Appeler la méthode error
    LOGGER.error("TestClass", "Test error message");

    // Vérifier que console.error n'a pas été appelé
    expect(consoleErrorSpy).to.not.have.been.called;

    // Restaurer la fonction originale de console.error
    consoleErrorSpy.restore();
  });

  it("should log an error when level is LOG_LEVEL_ALL", () => {
    // Configurer le niveau de log pour inclure tous les types de messages
    LOGGER.level = LOG_LEVEL_ALL;

    // Utiliser un spy pour espionner la console.error
    const consoleErrorSpy = sinon.spy(console, "error");

    // Appeler la méthode error
    LOGGER.error("TestClass", "Test error message");

    // Vérifier si console.error a été appelé avec le message attendu
    expect(consoleErrorSpy).to.have.been.calledWith("[ERROR] expect.any(Number) - TestClass - Test error message");

    // Restaurer la fonction originale de console.error
    consoleErrorSpy.restore();
  });
});
