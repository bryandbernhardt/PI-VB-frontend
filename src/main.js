import './style.css';

const getProducts = async () => {
  await fetch('http://localhost:3000/products')
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      let cards = document.createElement('div');
      cards.classList.add('products');
      cards.id = 'list-products';

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
        </div>`
        cards.appendChild(productCard);
      });



      document.querySelector('#app').innerHTML = `
      <div>
        <header>
          <h1>PRODUTOS CATÁLOGO</h1>
          <div>
            <button id="cli-button" class="btn">CLIENTE</button>
            <button id="adm-button" class="btn">ADMIN</button>
          </div>
        </header>
        <div class="container" >
          <img src="./public/logo-675441896-1680313977-b8da0a9fd72c5b190dc1497d90c2c6df1680313978-480-0.png" class="img img-fluid" alt="Charming Fox Logo"/>
        </div>
        <div id="router">
          <div id="container-products"></div>
        </div>
      </div>
      `
      document.getElementById('container-products').appendChild(cards)
    })
}
await getProducts();

const getClient = async () => {
  await fetch('http://localhost:3000/products')
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      let cards = document.createElement('div');
      cards.classList.add('products');
      cards.id = 'list-products';

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
        </div>`
        cards.appendChild(productCard);
      });
      document.getElementById('container-products').innerHTML = '';
      document.getElementById('container-products').appendChild(cards);
    })
}

const getAdmin = async () => {
  document.querySelector('#router').innerHTML = `
    <div class="add-button">
      <button class="btn" data-toggle="modal" data-target="#modal-add">ADICIONAR</button>
    </div>
    <div id="container-products"></div>

    <!-- Modal -->
    <div class="modal fade" id="modal-add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Novo produto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="form-create-product">
              <label for="name">Nome:</label><br>
              <input type="text" id="name" name="name" required><br>
              <label for="code">Código:</label><br>
              <input type="number" id="code" name="code" required><br>
              <label for="quantity">Quantidade:</label><br>
              <input type="number" id="quantity" name="quantity" required><br>
              <label for="value">Valor:</label><br>
              <input type="number" step=".01" id="value" name="value" required><br>

              <div class="add-modal-buttons">
                <button type="reset" class="btn btn-secondary">Limpar</button>
                <button type="submit" id="save-btn" class="btn buy-button" >SALVAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  await fetch('http://localhost:3000/products')
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      let cards = document.createElement('div');
      cards.classList.add('products');
      cards.id = 'list-products';

      products.map((product) => {
        let productCard = document.createElement('div');
        productCard.innerHTML = `
        <div class="card">
          <div class="card-body">
            <p class="productName">${product.name}</p>
            <p class="prices">DE <span class="priceOld">R$${product.value.toFixed(2)}</span> | POR <span class="price">R$${product.value.toFixed(2)}</span></p>
          </div>
          <img class="card-img" src="https://source.unsplash.com/featured/300x201" alt="Imagem ${product.name}"/>
        </div>`
        cards.appendChild(productCard);

        document.getElementById('container-products').appendChild(cards)
      });
    })

  const form = document.getElementById('form-create-product');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();

    await fetch('http://localhost:3000/products', {
      method: "POST",
      body: JSON.stringify({
        name: event.target.elements.name.value,
        code: Number(event.target.elements.code.value),
        quantity: Number(event.target.elements.quantity.value),
        value: Number(event.target.elements.value.value),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(response => response.json())
      .then((product) => {
        let html = document.getElementById('list-products')
        let oldHtml = html.innerHTML;
        let newHtml = `
        <div class="card">
          <div class="card-body">
            <p class="productName">${product.name}</p>
            <p class="prices">DE <span class="priceOld">R$${product.value.toFixed(2)}</span> | POR <span class="price">R$${product.value.toFixed(2)}</span></p>
          </div>
          <img class="card-img" src="https://source.unsplash.com/featured/300x201" alt="Imagem ${product.name}"/>
        </div>`

        let tempHtml = oldHtml + newHtml;
        html.innerHTML = tempHtml;


      })
      .catch(err => console.log(err));
  });
}

const cliButton = document.getElementById('cli-button');
cliButton.addEventListener('click', async () => {
  await getClient();
})

const admButton = document.getElementById('adm-button');
admButton.addEventListener('click', async () => {
  await getAdmin()
})