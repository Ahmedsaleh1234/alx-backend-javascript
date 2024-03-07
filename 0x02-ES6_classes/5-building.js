export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new TypeError('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
