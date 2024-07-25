// Problem Statement: You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add new books, search for books by title or author, and display information about the library's collection.

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

// Task 2: Implement a method within the Book object to display book information.

function Book(title,author,pages)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function displayinfo(bookobj){
    console.log("Displaying books info:");
    bookobj.forEach(element => {
        console.log(element);
    });
}

let book1 = new Book("To Kill a Mockingbird","Harper Lee",281);
let book2 = new Book("The Great Gatsby","F. Scott Fitzgerald",180);
let book3 = new Book("Moby-Dick","Herman Melville",635);
let book4 = new Book("Pride and Prejudice","Jane AudioListener",279);

let bookobj = [book1,book2,book3,book4];

displayinfo(bookobj);

/*.....................................................................................................................................
Task 3 (Bonus): Create an array to store book objects and implement functions to add new books and search for books by title or author.
Task 4 (Bonus): Create functions that utilize the filter method to filter out books that contain more than 100 pages 
and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.*/

const book_arr =[{title:"The Hobbit",author:"J.R.R. Tolkien",pages:310},
           {title:"The Da Vinci Code",author:"Dan Brown",pages:208},
           {title:"Brave New World",author:"Aldous Huxley",pages:20},
           {title:"The Alchemist",author:"Paulo Coelho",pages:45}  
          ];

function display_books(book_arr){
    console.log("Displaying array of books:");
    book_arr.forEach(book=>
    {
        console.log(book);
    });
}

function add_books(book_arr,book_list){
     console.log("Adding new book to our library:")
     for(book_obj in book_list){
          book_arr.push(book_list[book_obj]);
     }
     display_books(book_arr);
}

function search_books_by_title(title_info){
    console.log(`result of filter books with the title ${title_info}`);
    let book_info = book_arr.filter(bookinfo => bookinfo.title == title_info);
    return book_info;
}

function search_books_by_author(author_info){
    console.log(`result of filter books with the author ${author_info}`);
    const book_filtered = book_arr.filter(book => book.author == author_info);
    return book_filtered;
}

function find_books(pages){
    console.log("result of filter books with pages > 100:")
    const bookarr = book_arr.filter(books => books.pages > pages);
    return bookarr;
    //return book_arr.map(book_arr => (book_arr.title,book_arr.author));
}

function find_books_new(pages){
    console.log("result of filter books with pages < 100:")
    const bookarr = book_arr.filter(books => books.pages <= pages);
    return bookarr;
}

function mapUpdate(books){
    return books.map(book_arr => ({
        title : "Title:" + book_arr.title,
        author : "author:" + book_arr.author,
        pages : "pages:" +  book_arr.pages
  }));
}

// Call functions and instantiate

display_books(book_arr);

let book_obj = {title : "Ape World",author :"Henry Simon",pages: 234};
let book_new = {title: "Jane Eyre", author: "Charlotte Brontë", pages: 500};
let book_one = {title: "Frankenstein", author: "Mary Shelley", pages: 280};

add_books(book_arr,{book_obj,book_new,book_one});

let book_info_by_title = search_books_by_title("The Alchemist");
console.log(book_info_by_title);

let book_info_by_author = search_books_by_author("Harper Lee");
console.log(book_info_by_author);
let book_info_author_one = search_books_by_author("Dan Brown");
console.log(book_info_author_one);

const books = find_books(100);
console.log(books);

const books1 = find_books_new(100);
console.log(books1);

const book_info_new = mapUpdate(book_arr);
console.log(book_info_new);

