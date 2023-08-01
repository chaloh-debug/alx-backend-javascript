export default function getStudentsIdSum(arr) {
  if (arr instanceof Array) {
    const init = 0;
    return arr.reduce((first, last) => first.id || first + last.id, init);
  }
  return 0;
}
