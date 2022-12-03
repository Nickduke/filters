import { products } from './products.js';

let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article data-id="${id}" class="product">
          <img
            src=${image}
            alt=""
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join('');

  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search.</h6>`;
    return;
  }
};
displayProducts();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(inputValue);
  });
  displayProducts();
});

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};
displayButtons();
