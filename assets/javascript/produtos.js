const productsContainer = document.querySelector('#productsContainer');

window.onload = loadCatalog();

function loadCatalog() {
    fetch('assets/json/products.json').then(response => {
        return response.json();

    }).then(data => {
        data.produtosCatalogo.map((produto) => {
            productsContainer.innerHTML += `<button data-row="${produto.name} - ${produto.store}" class="block h-min p-2 rounded-md shadow-black shadow-lg hover:shadow-pink-700 hover:scale-105 transition-all duration-300">
            <figure class="text-sm font-bold">
                <img class="w-full h-32 rounded-md sm:h-48" src="${produto.imgURL}" alt="">

                <figcaption>
                    <h3 id="product-name" title="${produto.name} - ${produto.store}" class="w-3/4 whitespace-nowrap overflow-hidden overflow-ellipsis">${produto.name}</h3>
                </figcaption>
            </figure>
            <div class="w-full flex justify-between items-center flex-wrap font-medium">
                <h3>R$</h3>
                <h1 class="text-2xl text-pink-700 font-extrabold">${String(produto.prize).replace('.', ',')}</h1>
            </div>
        </button>`
        });

    }).catch(error => {
        window.alert('Algo deu errado com a requisição ás informações!');
        console.log(error);
    });
}