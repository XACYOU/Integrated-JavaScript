const productList=document.getElementById('productList');
const sortSelect=document.getElementById('sortSelect');
const searchInput=document.getElementById('searchInput');

let product=[];

async function fetchProducts(){
    try {
        const response= await fetch('https://fakestoreapi.com/products');
        product= await response.json();
        displayProduct(product);

    } catch (error) {
        console.log(error);
    }
}

function displayProduct(data) {
    productList.innerHTML='';
    data.forEach((ele)=>{
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');
        let image = document.createElement('img');
        image.src = ele.image;
        let title= document.createElement('h3');
        title.textContent = ele.title;
        let category= document.createElement('p');
        category.textContent=ele.category;
        let price= document.createElement('p');
        price.textContent=ele.price;

        productDiv.append(image, title, category, price);
        productList.append(productDiv);
    });
}
// console.log(product);

sortSelect.addEventListener('change', ()=>{

    const sortValue=sortSelect.value;
    let sortedProduct=[...product];

    switch (sortValue) {
        case 'asc':sortedProduct.sort((a,b)=>a.price-b.price);
        break;
        case 'desc':sortedProduct.sort((a,b)=>b.price-a.price);
        break;
        case 'default':
        break;
    }
    displayProduct(sortedProduct);
});

function searchProduct(){
    // console.log(product)
    
    let searchInputValue=searchInput.value.toLowerCase();
    // console.log(value);

    let searchedProduct=product.filter((ele)=>{
        return ele.title.toLowerCase().includes(searchInputValue);
    });
    displayProduct(searchedProduct);
}

fetchProducts();