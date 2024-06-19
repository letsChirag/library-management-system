let books = [];

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    if (title.trim() !== '' && author.trim() !== '') {
        let book = {
            id: Date.now(),
            title: title,
            author: author
        };
        books.push(book);
        displayBooks();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
    } else {
        alert('Please enter both title and author');
    }
}

function displayBooks() {
    let bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    books.forEach(book => {
        let li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

function searchBooks() {
    let searchText = document.getElementById('search').value.toLowerCase();
    let filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText);
    });
    displayFilteredBooks(filteredBooks);
}

function displayFilteredBooks(filteredBooks) {
    let bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        let li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

// Sample data
books.push({ id: 1, title: 'Book 1', author: 'Author 1' });
books.push({ id: 2, title: 'Book 2', author: 'Author 2' });
books.push({ id: 3, title: 'Book 3', author: 'Author 3' });

displayBooks();
