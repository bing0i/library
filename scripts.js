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
        let index = myLibrary.indexOf(null)
        if (index > -1)
            myLibrary[index] = newBook
        else {
            myLibrary.push(newBook)
            index = myLibrary.length - 1
        }
        render(newBook, index)
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
        myLibrary[index] = null
        document.querySelector('#tbodyBook').removeChild(document.querySelector('#tr' + btnRemove.id))
        console.log(myLibrary)
    })

    tr.setAttribute('id', 'tr' + index.toString())
    tr.appendChild(btnRemove)
    tbodyBook.appendChild(tr)
}

addBookToLibrary()
