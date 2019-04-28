let productCart = [
    {productName: 'device_1', price: 60, quantity: 2},
    {productName: 'device_2', price: 45, quantity: 5},
    {productName: 'device_3', price: 120, quantity: 5}
];

function countBasketPrice(array) {
    let totalSum = 0;
    for(let i = 0; i < array.length; i++) {
        totalSum += array[i].price * array[i].quantity;
    }
    return totalSum;
}

console.log(countBasketPrice(productCart));