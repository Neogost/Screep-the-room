import { LOG_LEVEL_ALL } from "config/config";
import { GameLoop } from "gameloop";
import { ErrorMapper } from "utils/ErrorMapper";
import { LOGGER } from "utils/logger";

var gameLoop: GameLoop;
function unwrappedLoop() {
  if (gameLoop != null) {
    gameLoop.tick();
  } else {
    gameLoop = new GameLoop();
  }
}

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  // Settings
  LOGGER.level = LOG_LEVEL_ALL;
  unwrappedLoop();
});
