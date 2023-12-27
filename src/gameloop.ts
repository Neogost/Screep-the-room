import { Initialize } from "utils/initialize";
import { LOGGER } from "utils/logger";
/**
 * Definie the game structure execution. Each tick is an instance of this object. the `GameLoop` do everything is needed.
 *
 */
export class GameLoop {
  /**
   * Initialize the game and all the properties needed at the start of it.
   */
  constructor() {
    this.initializeMemory();

    // Scan rooms to find informations and tasks to do
    this.tick();

    // Save the state, do memory management
    this.save();
  }

  /**
   * Action execute at each tick of the game.
   */
  public tick() {
    // Scan rooms to find informations and tasks to do
    this.scanForNewTasks(Game.time % 50 === 0);
    // Execute task
    this.executeAllTasks();
    // Save the state, do memory management
    this.save();
  }

  /**
   * Initialize the structure of the game. Exécuted only one time.
   */
  public initializeMemory() {
    LOGGER.info(GameLoop.name, "Initialize memory");

    Initialize.rooms();
  }

  /**
   * Scan the game to find new task to do. Creeps tasks, rooms task, flags tasks...
   * @param define the necessarity to do the job
   */
  public scanForNewTasks(define: boolean) {
    // Can use the bucket to generate pixel ?
    if (Game.cpu.bucket ?? 0 >= 10000) {
      const code: number = Game.cpu.generatePixel();

      if (code === OK) {
        LOGGER.info(GameLoop.name, `Pixel generated`);
      } else {
        LOGGER.warn(GameLoop.name, `Pixel generation return error code `);
      }
    }
  }

  /**
   * Execute tasks for each entity in the game
   */
  public executeAllTasks() {}

  /**
   * Load task who are stock in memory.
   * @returns statut of the loading.
   */
  public loadTasks(): boolean {
    return true;
  }

  /**
   * Save the game changement during the tick
   */
  public save() {
    // Automatically delete memory of missing creeps
    //Object.keys(Memory.creeps)
    //  .filter(name => !(name in Game.creeps))
    //  .forEach(name => delete Memory.creeps[name]);
  }

  /**
   * Execute flags action. A flag action is the name of a flag with '.' who delimitated arguments
   */
  public executeFlagsTasks() {}

  private executeStructureTask() {}
  /**
   * @description Manage the execution of creep. Each creep as a role. Role drive the action of a creep.
   */
  private executeCreepTask() {
    _.forEach(Game.creeps, creep => {
      switch (creep.memory.role) {
        default:
          break;
      }
    });
  }
}
