import { LOGGER } from "./logger";

export class Initialize {
  public static rooms() {
    LOGGER.info(Initialize.name, "Initialize Rooms");

    _.forEach(Game.rooms, (room, name) => {
      const isMyRoom = room.controller?.my;
      const isRoomInitialized = !_.isEmpty(Memory.rooms?.[name!]);

      if (!isMyRoom) {
        LOGGER.info(Initialize.name, `Room ${name} is not mine.`);
      } else if (!isRoomInitialized) {
        const newRoom: RoomMemory = {
          name: room.name ?? "Unnamed"
        };
        _.set(Memory, ["rooms", name], newRoom);
        LOGGER.info(Initialize.name, `Room ${name} initialized.`);
      } else {
        LOGGER.info(Initialize.name, `Room ${name} already initialized.`);
      }
    });
  }
}
