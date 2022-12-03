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
