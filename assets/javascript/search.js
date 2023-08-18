const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = () => filtrar();

searchInput.oninput = () => filtrar();

function filtrar(){
    let products = document.querySelectorAll('#productsContainer a');
    let filter = searchInput.value.toUpperCase();

    products.forEach(produto => {
        if (produto.getAttribute('data-row').toUpperCase().indexOf(filter) > -1){
            produto.style.display = ''

        }
        else{
            produto.style.display = 'none'
            
        }
    });
}