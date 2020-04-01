function Book(tittle, author, year) {
  this.tittle = tittle;
  this.author = author;
  this.year = year;
}
Book.prototype.getSummary = function() {
  return `${this.tittle} was written by ${this.author} in ${this.year}`;
};
function Magazine(tittle, author, year, month) {
  Book.call(this, tittle, author, year);
  this.month = month;
}
//inherit
Magazine.prototype = Object.create(Book.prototype);
// instantiate Magazine
const mag1 = new Magazine('Dreams', 'Hosea', '2018', 'January');
console.log(mag1);
console.log(mag1.getSummary());
