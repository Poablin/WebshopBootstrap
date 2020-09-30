function orderProducts() {
    if (model.currentUserId === null) return alert('Du er ikke logga inn! (Bytt denne if setninga seinere)');
    if (model.shoppingBasket.products.length <= 0) return alert('Du har ikke lagt til noen varer!');
    model.orderHistory[model.currentUserId].orderList.push({
        orderId: model.orderHistory[model.currentUserId].nextOrderId,
        delivered: false,
        productsName: getProductNamesFromBasketProductsId(),
        productsAmount: getBasketProductAmount(),
        productsPriceTotal: getBasketProductPriceTotal(),
        priceTotalAll: model.shoppingBasket.priceTotalAll,
    })

    addPurchaseHistory()

    model.orderHistory[model.currentUserId].nextOrderId++;
    model.shoppingBasket = {
        products: [],
        priceTotalAll: 0,
    };
    showBasket();
    alert('Takk for kjøpet!');
}

function addPurchaseHistory() {
    let idArray = getBasketProductsId();
    for (i = 0; i < idArray.length; i++) {
        model.purchaseHistory[idArray[i]].amount++
    }
}

function removeProduct(id) {
    let index = searchBasketProductIndex(id);
    model.shoppingBasket.products.splice(index, 1);
    console.log(index);
    showBasket();
}

function changeProductAmount(add, id) {
    let productIndex = searchBasketProductIndex(id);
    const product = model.shoppingBasket.products[productIndex];
    if (product.amount >= 99 && add === true) {
        product.amount = 99;
        return showBasket()
    };
    product.amount += add ? 1 : -1;
    product.amount <= 0 ? removeProduct(model.currentUserId, id) : '';
    showBasket()
}

function changeProductAmount2(amount, id) {
    let productIndex = searchBasketProductIndex(id);
    const product = model.shoppingBasket.products[productIndex];
    product.amount = amount;
    amount <= 0 ? removeProduct(id) : '';
    product.amount >= 99 ? product.amount = 99 : '';
    showBasket()
}

function priceTotalCalculation() {
    if (model.shoppingBasket.products.length <= 0) return model.shoppingBasket.priceTotalAll = 0;
    let id = getBasketProductsId();
    let priceTotal = 0;
    let priceTotalAll = 0;
    let moms = 1;
    for (i = 0; i < model.shoppingBasket.products.length; i++) {
        priceTotal = parseInt(model.products[id[i]].price) * parseInt(model.shoppingBasket.products[i].amount);
        priceTotalAll += parseInt(model.products[id[i]].price) * parseInt(model.shoppingBasket.products[i].amount);
        moms = parseInt(model.products[id[i]].moms) / 100 + 1
        if (moms > 1) {
            priceTotal = priceTotal * moms;
            priceTotalAll = priceTotalAll * moms;
        }
        model.shoppingBasket.products[i].priceTotal = Math.ceil(priceTotal)
    }
    model.shoppingBasket.priceTotalAll = Math.ceil(priceTotalAll)
}

function getBasketProductsId() {
    let list = [];
    for (index = 0; index < model.shoppingBasket.products.length; index++) {
        list.push(model.shoppingBasket.products[index].id)
    }
    return list
}

function getProductNamesFromBasketProductsId() {
    let list = getBasketProductsId();
    let names = [];
    for (index = 0; index < list.length; index++) {
        names.push(model.products[list[index]].name)
    }

    return names
}

function getBasketProductAmount() {
    let list = [];
    for (index = 0; index < model.shoppingBasket.products.length; index++) {
        list.push(model.shoppingBasket.products[index].amount)
    }
    return list
}

function getBasketProductPriceTotal() {
    let list = [];
    for (index = 0; index < model.shoppingBasket.products.length; index++) {
        list.push(model.shoppingBasket.products[index].priceTotal)
    }
    return list
}