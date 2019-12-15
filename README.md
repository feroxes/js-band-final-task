# Ciklum University: Final task

<a href="https://feroxes.github.io/js-band-final-task/">Demo</a>

## Scenarios
* User goes to the JS Band store website;
* If User unauthorized System redirect user for Sign-in screen (That s only screen available for unauthorized user);
* User sign-in with username, System return user token (API provide token), redirects User to the Book list and store token in LocalStorage and Application State;
* User see the list of books (provided by API); Search by book name, filter list by the price;
* User navigate to the specific Book details clicking on 'View' button;
* User choose needed count of books, see total price and add the book to the cart. Then User can navigate back to the list or go forward to the Cart;
* User goes to the Cart, see order list and press 'Purchase' button;
* System place order (via API), show successful message and clear the cart;
* Then User sign-Out, System redirect User to the Sign-In screen.

## To install project

`git clone` - clone this repo

`npm install || yarn` - install packages

## Scripts description

`npm run dev` - run develop server.

`npm run build` - build app for production.

`npm run lint` - check errors with eslint.

`npm run lint-fix` - fix errors with eslint.


## Project Structure 

```
.
├── src
|   ├── actions
|   |    ├── books.js
|   |    ├── purchaseCard.js
|   |    ├── user.js
|   ├── assets
|   |    ├── fonts
|   |    ├── images
|   |    ├── scss
|   |    |    ├── utils
|   |    |    |    └── fonts.scss
|   |    |    |    └── mixins.scss
|   |    |    |    └── reset.scss
|   |    |    |    └── vars.scss
|   |    |    └── main.css
|   ├── components
|   |    ├── BookDetailsInfo
|   |    |    ├── index.js
|   |    ├── BookPurchase
|   |    |    ├── index.js
|   |    ├── BooksList
|   |    |    ├── BookCard
|   |    |    |    ├── index.js
|   |    |    ├── index.js
|   |    ├── Footer
|   |    |    ├── index.js
|   |    ├── Header
|   |    |    ├── index.js
|   |    ├── Menu
|   |    |    ├── index.js
|   |    |    ├── priceFilter.js
|   |    ├── PurchaseCard
|   |    |    ├── PurchaseCardEmptyCard
|   |    |    |    ├── index.js
|   |    |    ├── PurchaseCardList
|   |    |    |    ├── BasketItem
|   |    |    |    |    ├── index.js
|   |    |    |    ├── index.js
|   |    ├── Spinner
|   |    |    ├── index.js
|   |    ├── ui
|   |    |    ├── BaseButton
|   |    |    |    ├── index.js
|   |    |    ├── BaseInput
|   |    |    |    ├── index.js
|   |    |    ├── BaseSelect
|   |    |    |    ├── index.js
|   |    |    ├── BasketIcon
|   |    |    |    ├── index.js
|   |    |    ├── Modal
|   |    |    |    ├── index.js
|   |    |    |    ├── Modal.scss
|   ├── containers
|   |    ├── BookDetails
|   |    |    ├── index.js
|   |    ├── Books
|   |    |    ├── index.js
|   |    ├── NotFound
|   |    |    ├── index.js
|   |    ├── PurchaseCard
|   |    |    ├── index.js
|   |    ├── SignIn
|   |    |    ├── index.js
|   |    |    ├── signIn.scss
|   ├── helpers
|   |    ├── index.js
|   ├── reducers
|   |    ├── books.js
|   |    ├── index.js
|   |    ├── purchaseCard.js
|   |    ├── user.js
|   ├── routes
|   |    ├── PrivateRoute
|   |    |    ├── index.js
|   |    ├── PublicRoute
|   |    |    ├── index.js
|   ├── App.js
|   └── index.js
```
