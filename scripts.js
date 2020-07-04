function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read ? "read" : "not read yet")
}

let myLibrary = []

function addBookToLibrary() {
   const btnAdd = document.querySelector('#btnAdd');
    btnAdd.addEventListener('click', () =>  {
        let newBook = new Book(document.querySelector('#title').value, 
                                document.querySelector('#author').value,
                                document.querySelector('#pages').value, 
                                document.querySelector('#read').value)
        myLibrary.push(newBook)
        console.log(myLibrary)
        myLibrary.forEach(element => console.log(element))
    })
}

addBookToLibrary()