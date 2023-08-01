export default function getStudentsByLocation(arr, city) {
  if (arr instanceof Array) {
    return arr.filter((cities) => cities.location === city);
  }
  return [];
}
