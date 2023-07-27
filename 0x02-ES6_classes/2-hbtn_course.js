export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(data) {
    if (typeof data !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    this._name = data;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number.');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(data) {
    if (!(data instanceof Array)) {
      throw new TypeError('Students must be an array of strings.');
    }
    if (!data.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings.');
    }
    this._students = data;
  }
}
