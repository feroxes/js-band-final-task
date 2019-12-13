# Ciklum University: Final task

<a href="https://feroxes.github.io/js-band-final-task/">Demo</a>

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
