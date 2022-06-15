class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating
    );
    return ratingsSum / this._ratings.length;
  }

  addRating(inputValue) {
    this._ratings.push(inputValue);
  }
}
export { Media };
