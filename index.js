const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    }
};

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];



function getTotalPriceOfShoppingBag (shoppingBagArray) {
    let shoppingBagArrayWithPriceAndDiscount = shoppingBagArray.map(item => {
        item.price = groceries[item.productId].price
        item.discount = groceries[item.productId].discount
        return item
    })
    let result = shoppingBagArrayWithPriceAndDiscount.reduce((acc, item) => {
        return acc += ((item.price * item.count) - ((item.price * item.count) * (item.discount / 100)))
    }, 0)
    return result
}

const totalPrise = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrise', totalPrise)

