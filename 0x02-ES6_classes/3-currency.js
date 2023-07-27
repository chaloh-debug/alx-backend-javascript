export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(data) {
    if (typeof data !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    this._code = data;
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

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
