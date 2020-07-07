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
    toggleBtnR()
    const btnAdd = document.querySelector('#btnAdd');
    btnAdd.addEventListener('click', () =>  {
        let read = "";
        let btnR = document.querySelector('#btnR')
        if (btnR.textContent === "Yes")
            read = "true"
        else
            read = "false"
        let newBook = new Book(document.querySelector('#title').value, 
                                document.querySelector('#author').value,
                                document.querySelector('#pages').value, 
                                read)
        let index = myLibrary.indexOf(null)
        if (index > -1)
            myLibrary[index] = newBook
        else {
            myLibrary.push(newBook)
            index = myLibrary.length - 1
        }
        render(newBook, index)
    })
}

function render(newBook, index) {
    let tbodyBook = document.querySelector('#tbodyBook')
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    let btnRead = document.createElement('button')

    for(let prop in newBook) {
        if (newBook.hasOwnProperty(prop)) {
            if (prop === "read") {
                btnRead.setAttribute('id', index.toString())
                if (newBook[prop] === "true") {
                    btnRead.setAttribute('class', 'btnYes')
                    btnRead.textContent = "Yes"
                } else {
                    btnRead.setAttribute('class', 'btnNo')
                    btnRead.textContent = "No"
                }
                btnRead.addEventListener('click', () => {
                    if (myLibrary[Number(btnRead.id)].read === "true") {
                        myLibrary[Number(btnRead.id)].read = "false"
                        btnRead.textContent = "No"
                        btnRead.setAttribute('class', 'btnNo')
                    } else {
                        myLibrary[Number(btnRead.id)].read = "true"
                        btnRead.textContent = "Yes"
                        btnRead.setAttribute('class', 'btnYes')
                    }
                })
                td.appendChild(btnRead)
            }
            else {
                td.textContent = newBook[prop]
            }
            tr.appendChild(td)
            td = document.createElement('td')
        }
    }

    let btnRemove = document.createElement('button')
    btnRemove.setAttribute('id', index.toString())
    btnRemove.setAttribute('class', 'btnRemove')
    btnRemove.textContent = "-"
    btnRemove.addEventListener('click', () => {
        myLibrary[Number(btnRemove.id)] = null
        tbodyBook.removeChild(document.querySelector('#tr' + btnRemove.id))
    })
    td = document.createElement('td')
    td.appendChild(btnRemove)
    tr.appendChild(td)

    tr.setAttribute('id', 'tr' + index.toString())
    tbodyBook.appendChild(tr)
}

function toggleBtnR() {
    let btnR = document.querySelector('#btnR')
    btnR.addEventListener('click', () => {
        if (btnR.textContent === "Yes") {
            btnR.textContent = "No"
            btnR.style.color = "#ff2e63"
        } else if (btnR.textContent === "No") {
            btnR.textContent = "Yes"
            btnR.style.color = "#49d292"
        }
    })
}

addBookToLibrary()
