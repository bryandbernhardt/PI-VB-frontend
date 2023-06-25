import './style.css';

const getProducts = async () => {
  await fetch('http://localhost:3000/products')
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      let cards = document.createElement('div');
      cards.classList.add('products');

      products.map((product) => {
        let productCard = document.createElement('div');
        productCard.innerHTML = `
        <div class="card">
          <div class="card-body">
            <p class="productName">${product.name}</p>
            <p class="prices">DE <span class="priceOld">R$${product.value.toFixed(2)}</span> | POR <span class="price">R$${product.value.toFixed(2)}</span></p>
          </div>
          <img class="card-img" src="https://source.unsplash.com/featured/300x201" alt="Imagem ${product.name}"/>
          <div class="card-body buy-buttons">
            <button id="buyButton" class="btn buy-button" data-toggle="modal" data-target="#modal${product.id}">COMPRAR</button>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="modal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">${product.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img src="https://source.unsplash.com/featured/300x201"/>
              </div>
              <div class="modal-info">
                <p>Descrição bem legal</p>
                <p>R$${product.value.toFixed(2)}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn buy-button" data-dismiss="modal" onClick="comprado()">COMPRAR</button>
              </div>
            </div>
          </div>
        </div>
        `
        cards.appendChild(productCard);
      });



      document.querySelector('#app').innerHTML = `
      <div>
        <header>
          <h1>PRODUTOS CATÁLOGO</h1>
        </header>
        <div class="container" >
          <img src="./public/logo-675441896-1680313977-b8da0a9fd72c5b190dc1497d90c2c6df1680313978-480-0.png" class="img img-fluid" alt="Charming Fox Logo"/>
        </div>
        <div id="container-products">
        </div>
      </div>
      `
      document.getElementById('container-products').appendChild(cards)
    })
}
await getProducts();