function consumoApi() {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {console.log(json)
            if(json.length !== 0){
              traerProductos(json);  
            }
            
        })
            
}
          
const div = document.getElementById('contenedorcards');
consumoApi();

function traerProductos(json) {
    div.innerHTML = '';
    json.forEach(products => {
        const { title, price, category, image } = products;
        const producto = document.createElement('div');
        producto.classList.add('products');
        producto.innerHTML = `
<div class="row row-cols-1 row-cols-md-2 g-4">
 <div class="col">
  <div class="card h-100">
    <div class="card" style="width: 18rem;" >
        <img src="${image}" class="card-img-top"></img>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Categoria:${category}</h6>
         <h6 class="card-subtitle mb-2 text-body-secondary">Precio:${price}</h6>
          <a href="#" class="btn btn-dark">COMPRAR</a>
        </div>
    </div>
  </div>
 </div>
</div>
`
div.appendChild(producto);
    });
}
