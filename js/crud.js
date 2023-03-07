const BASE_URL = "http://localhost:3000/books/";

//Read - method GET
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



//Create - method POST
const newBook = {
    title: "Test Book CSS",
    author: "Me",
    genres: ["CSS"],
    rating: 9.58
}

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    }

    return fetch(`${BASE_URL}`, options)
    .then((response) => response.json())
    .then(console.log);
}