let productCart	= {
    productsList: [],
    countTotalPrice() {
        let totalPrice = 0;
        this.productsList.forEach(price => {
            totalPrice += price
        });
        return totalPrice;
    },
    countTotalNumber(count) {
        let totalNumber = 0;
        totalNumber += count;
        return totalNumber;
    },
    putProduct(price) {
        let count = 0;
        count +=
        this.productsList.push(price);
        this.productCartText(count);
    },
    productCartText(count) {
        if(this.productsList.length) {
            document.getElementById('productCartText').innerText =
                `В корзине: ${this.countTotalNumber(count)} товаров на сумму ${this.countTotalPrice()} рублей`;
        }
    }
    /*generateMarkedListOfProducts(index) {
        let currentProduct = this.productsList[index];
        return `<li>${index+1}. Товар ${currentProduct.name} - ${currentProduct.price} - ${currentProduct.count} шт.</li>`;
    },
    printTotalValues() {
        let productCartDiv = document.createElement('div');
        productCartDiv.className = 'product-cart';
        let productCartStateString = 'Корзина пуста';
        if (this.productsList.length > 0) {
            productCartStateString = `<ul>`;
            for (let i = 0; i < this.productsList.length; i++) {
                productCartStateString += this.generateMarkedListOfProducts(i);
            }
            productCartStateString += `В корзине ${this.countTotalNumber()} товаров на сумму ${this.countTotalPrice()} рублей`;
        }
        productCartDiv.innerHTML = productCartStateString;
        let body = document.body;
        body.appendChild(productCartDiv);
    }*/
};
let products = [
    {name: 'device_1', price: 60},
    {name: 'device_2', price: 45},
    {name: 'device_3', price: 125},
    {name: 'device_4', price: 70}
];

/*for(let i = 0; i < products.length; i++) {

    products[i].count = 0;
    if(i % 2 === 0) {
        products[i].count += 1;
        productCart.putProduct(products[i]);
    } else {
        products[i].count += 2;
        productCart.putProduct(products[i]);
    }
}
productCart.printTotalValues();

console.log(productCart.countTotalPrice(), productCart.countTotalNumber());
*/
let productList = {
    createProductCards() {
        let productCartContainer = document.getElementById("main");
        for (let i = 0; i < products.length; i++) {
            let productName = products[i].name;
            let productPrice = products[i].price;
            productCartContainer.innerHTML += `<div class="product-card">
            <h2>${productName}</h2>
            <p>Цена ${productPrice}</p>
            <button onclick="productCart.putProduct(${productPrice})" id="button">Купить</button>
            </div>`;
        }
        productCartContainer.innerHTML += `<div id="productCartText" class="cart-block">Корзина пуста</div>`;
    }
};
productList.createProductCards();
