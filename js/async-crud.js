const BASE_URL = "http://localhost:4040/";

//Read - method GET =======================================//
async function fetchBooks() {
    const response = await fetch(`${BASE_URL}books/`);
    const books = await response.json();
    return books;
}

async function fetchBookById(bookID) {
    const response = await fetch(`${BASE_URL}books/${bookID}`);
    const bookById = await response.json();
    return bookById;
}



//Create - method POST ====================================//
const newBook = {
    title: "Test Book CSS",
    author: "Me",
    genres: ["Node-JS"],
    rating: 9.58
}

async function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json", // Что ты отсылаешь
            Accept: "application/json" // Что ты готов обрабатывать
        },
        body: JSON.stringify(book)
    }

    const response = await fetch(`${BASE_URL}books/`, options);
    const addedBook = await response.json();
    return addedBook;
}



//Update - method PUT and PUTCH ================================//
const newUpdateBook = {
    title: "Very Big Book of CSS",
    author: "Polina"
}

async function updateBookByID(updateObj = {}, bookID = 0) {
    const options = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateObj)
    }

    const response = await fetch(`${BASE_URL}books/${bookID}`, options);
    const updatedBook = await response.json();
    return updatedBook;
}



//Delete - method DELETE ======================================//
async function deleteBookByID(bookID) {
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(`${BASE_URL}books/${bookID}`, options);
    return response;
}