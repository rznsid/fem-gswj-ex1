function addFavoriteBook(bookName) {
    if (!bookName.toLowerCase().includes("great")) {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks(books) {
    console.log(`Favorite Books: ${books.length}`)
    for (let book of books) {
        console.log(book);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks(favoriteBooks);