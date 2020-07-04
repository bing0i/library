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
        render(newBook, myLibrary.length - 1)
        console.log(myLibrary)
    })
}

function render(newBook, index) {
    let tbodyBook = document.querySelector('#tbodyBook')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    for(let prop in newBook) {
        if (newBook.hasOwnProperty(prop)) {
            td.textContent = newBook[prop]
            tr.appendChild(td)
            td = document.createElement('td')
        }
    }

    let btnRemove = document.createElement('button')
    btnRemove.setAttribute('id', index.toString())
    btnRemove.textContent = "Remove"
    btnRemove.addEventListener('click', () => {
        myLibrary.splice(parseInt(btnRemove.id), 1)
        console.log(myLibrary)
    })

    tr.appendChild(btnRemove)
    tbodyBook.appendChild(tr)
}

addBookToLibrary()
