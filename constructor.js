const s1 = 'hello';

const s2 = new String('Hello');

console.log(typeof s1);
console.log(typeof s2);

function Book(tittle, author, year) {
  this.tittle = tittle;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `${this.tittle} was written by ${this.author} in ${this.year}`;
  };
}
const Book1 = new Book('çlamourious', 'Jonny', '2015');
const Book2 = new Book('çlamouriousy', 'Jonnyal', '2012');
console.log(Book1.getSummary);
console.log(Book1.getSummary);
