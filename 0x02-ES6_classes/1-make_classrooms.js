import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const val1 = new ClassRoom(19);
  const val2 = new ClassRoom(20);
  const val3 = new ClassRoom(34);

  return [val1, val2, val3];
}
