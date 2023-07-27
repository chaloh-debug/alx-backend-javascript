export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(data) {
    if (typeof data !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = data;
  }

  get code() {
    return this._code;
  }

  set code(data) {
    if (typeof data !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = data;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
