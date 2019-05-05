let productCart	= {
    productsList: [],
    countTotalPrice() {
        let totalPrice = 0;
        for (let i = 0;  i < this.productsList.length; i++) {
            totalPrice += this.productsList[i].price * this.productsList[i].count;
        }
        return totalPrice;
    },
    countTotalNumber() {
        let totalCount = 0;
        for (let i = 0;  i < this.productsList.length; i++) {
            totalCount += this.productsList[i].count;
        }
        return totalCount;
    },
    putProduct: function(product) {
        this.productsList.push(product);
    }
}

let products = [
    {name: 'device_1', price: 60},
    {name: 'device_2', price: 45},
    {name: 'device_3', price: 125}
];

for(let i = 0; i < products.length; i++) {
    if(i % 2 === 0) {
        products[i].count = 1;
        productCart.putProduct(products[i]);
    } else {
        products[i].count = 2;
        productCart.putProduct(products[i]);
    }
}

console.log(productCart.countTotalPrice(), productCart.countTotalNumber());
