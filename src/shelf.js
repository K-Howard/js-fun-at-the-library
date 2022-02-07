function shelfBook(book, shelf) {
 if (shelf.length < 3) {
  shelf.unshift(book)
 }
}
function unshelfBook(name, shelf) {
  var bookByName = (book) => book.title == name;
  var bookIndex = shelf.findIndex(bookByName);
  shelf.splice(bookIndex, 1);
}
function listTitles(shelf) {
 var titlesArray = []
 for (var i = 0; i < shelf.length; i++) {
   titlesArray.push(shelf[i].title)
 }
 return titlesArray.join(', ')
}
function searchShelf(shelf, title) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  return titles.includes(title)
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
