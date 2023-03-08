const BASE_URL = "http://localhost:3000/books/";

//Read - method GET =============================================================//
function fetchBooks() {
   return fetch(`${BASE_URL}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then((data) => console.log(data));
}

function fetchBookById(bookID) {
   return fetch(`${BASE_URL}${bookID}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then((data) => console.log(data));
}



//Create - method POST ============================================================//
const newBook = {
    title: "Test Book CSS",
    author: "Me",
    genres: ["Node-JS"],
    rating: 9.58
}

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json", // Что ты отсылаешь
            Accept: "application/json" // Что ты готов обрабатывать
        },
        body: JSON.stringify(book)
    }

    return fetch(`${BASE_URL}`, options)
    .then((response) => response.json())
    .then(console.log);
}

addBook(newBook);

//Update - method PUT and Putch ======================================================//
const newUpdateBook = {
    title: "Very Big Book of CSS",
    author: "Polina"
}

function updateBookByID(updateObj = {}, bookID = 0) {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateObj)
    }

    return fetch(`${BASE_URL}${bookID}`, options)
    .then((response) => response.json());
}

