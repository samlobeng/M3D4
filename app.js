
// You are creating the "shopping cart experience" for an Online Marketplace.
// From this API you can retrieve the list of the available books:
// https://striveschool-api.herokuapp.com/books

// What you need to do is:
// 0) Get all the products from the API using a fetch
// 1) Display the list of items available on the page using template literals `` and .forEach
// 2) Add an "Add to Cart" button
// 3) When the button is pressed, change the style of the item and add its data to another list. That's going to be the Cart's list. Display it somewhere.
// 4) Allow the user to delete items from the cart's list
// 5) Add a "Skip" or "Ignore" button to each book in the page
// 6) When pressed, the button should remove the corresponding item from the page, so the user can focus on those that interests him more.
// 7) Add a search bar where the user can search for books. When the user types more than 3 chars, you should filter the content of the page to show only the items with a matching name (hint: use .filter method)


// [EXTRA]
// 8) Add a "Clean Cart" button, to clean the whole list.
// 9) Create a "Detail page" for the product. When the user clicks on a product name, the app should redirect him to the secondary page, passing the ASIN in query string
// 10) In the detail page retrieve the ASIN from the query string and use it to fetch and show some details of the selected product (use this endpoint: https://striveschool-api.herokuapp.com/books/1940026091 to fetch the details of a specific book)


let booksCollection = [];

window.onload = async function(){

        fetch("https://striveschool-api.herokuapp.com/books")
        .then((response) => response.json())
        .then((books)=>{
            console.log(books);
            booksCollection = books;
            let parent  = document.querySelector("#books-content");
            books.forEach(element => {
                parent.innerHTML+= `<div class="card col-sm-6 col-md-5 col-lg-2">
                <img src="${element.img}" class="card-img-top "img-fluid" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.price} $ </p>
                  <a href="#" class="btn btn-primary" onclick="addToCart()">Add to Cart</a>
                </div>
              </div>`
            });
            
        })
}

// let addToCart = function(){
// let card = document.querySelectorAll(".card")
// for(let i = 0; i< card.length; i++){
//     card[0].style.display = "none"
// }

// }   