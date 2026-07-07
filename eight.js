const productsDiv=document.getElementById("products");
const count=document.getElementById("count");
const search=document.getElementById("search");
let products=[];
fetch("https://fakestoreapi.com/products")
.then(res => {
    if (!res.ok) {
        throw new Error("API Error");
    }
    return res.json();
})
.then(data => {
    products = data;
     // Task 1
    count.innerHTML = "Total Products : " + products.length;
    showAll();
})
.catch(() => {
    productsDiv.innerHTML = `
    <h2>  Unable to Load Products</h2>
    <p>Please try again later.</p>
    `;
});
//Task 2
function onlyNames(){
    productsDiv.innerHTML="";
    products.forEach((product,index)=>{
        productsDiv.innerHTML+=`
        <div class="card">
        <h3>Product ${index+1}</h3>
        <h4>${product.title}</h4>
        </div>
        `;
    });
}
//Task 3
function below100(){
    display(products.filter(product=>product.price<100));
}
//Task 4
function above100(){
    display(products.filter(product=>product.price>100));
}
//
function display(list){
    productsDiv.innerHTML="";
    list.forEach((product,index)=>{
        let description=product.description;
        //Task 5,6,14,15
        if(description.length>100){
            description=description.substring(0,100)+"Read More...";
        }
        productsDiv.innerHTML+=`
        <div class="card">
        <h3>Product ${index + 1}</h3>
        <img src="${product.image}" width="150">
        <h4>${product.title}</h4>
        <p>Category : ${product.category}</p>
        <p>${description}</p>
        <p>Price : $${product.price}</p>
        <p>Rating : ${product.rating.rate}</p>
        <button> Buy Now </button>
        </div>
        `;
    });
}
function showAll(){
    display(products);
}
//Task 8
function electronics(){
    display(products.filter(product=>product.category==="electronics"));
}
//Task 9
function mens(){
    display(products.filter(product=>product.category==="men's clothing"));
}
//Task 10
function womens(){
    display(products.filter(product=>product.category==="women's clothing"));
}
//Task 11
function jewelery(){
    display(products.filter(product=>product.category==="jewelery"));
}
//Task 12
function first5(){
    display(products.slice(0,5));
}
//Task 13
function last5(){
    display(products.slice(-5));
}
//Task 16
function highestRated(){
    let highest=products.reduce((a,b)=>
        a.rating.rate>b.rating.rate ? a:b
    );
    display([highest]);
}
//Task 17
function cheapest(){
    let cheap=products.reduce((a,b)=>
        a.price<b.price ? a:b
    );
    display([cheap]);
}
//Task 18
function costliest(){
    let costly=products.reduce((a,b)=>
        a.price>b.price ? a:b
    );
    display([costly]);
}
//Task 7
if (search){
search.addEventListener("keyup",()=>{
    let value=search.value.toLowerCase();
    let filtered=products.filter(product=>
        product.title.toLowerCase().includes(value)
    );
    display(filtered);
});
}

