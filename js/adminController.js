function adminAddNewProduct() {
    const newProductInputs = model.inputs.admin.newProductInputs;
    model.products.push({
        id: model.inputs.newProductId,
        name: newProductInputs.name,
        moms: newProductInputs.moms,
        productInfo: newProductInputs.productInfo,
        contents: newProductInputs.contents,
        calories: newProductInputs.calories,
        allergies: newProductInputs.allergies,
        price: newProductInputs.price,
        images: newProductInputs.images,
    });

    model.purchaseHistory.push({
        id: model.inputs.newProductId,
        amount: 0,
    })

    model.inputs.newProductId++
    showAdmin()
}

function adminRemoveProduct(id) {
    let index = searchProductIndex(id);
    let productBackup = model.products[index];
    model.productsArchive.push(productBackup)
    model.products.splice(index, 1);
    updateProduct(false)
    model.shoppingBasket = { products: [], priceTotalAll: 0 };
    console.log(index);
    return showAdmin();
}

function adminEditProduct(id) {
    const adminInputs = model.inputs.admin;
    let index = searchProductIndex(id);
    let stringified = JSON.stringify(model.products[index]);
    let parsed = JSON.parse(stringified);
    adminInputs.editProductInputs = parsed;
    adminInputs.productIsEditing = true;
    console.log(index);
    showAdmin();
}

function updateProduct(really) {
    const adminInputs = model.inputs.admin;
    let index = searchProductIndex(adminInputs.editProductInputs.id);
    really === true ? model.products[index] = adminInputs.editProductInputs : adminInputs.editProductInputs = [];
    adminInputs.productIsEditing = false;
    showAdmin()
}

function adminAddUser() {
    const newUserInputs = model.inputs.admin.newUserInputs;
    model.users.push({
        id: model.inputs.newUserId,
        username: newUserInputs.username,
        name: newUserInputs.name,
        surname: newUserInputs.surname,
        email: newUserInputs.email,
        phoneNumber: newUserInputs.phoneNumber,
        address: newUserInputs.address,
        password: newUserInputs.password,
        isAdmin: document.getElementById('adminCheckboxNew').checked ? true : false,
    });

    model.orderHistory.push({
        id: model.inputs.newUserId,
        orderList: [],
        nextOrderId: 0,
    })

    model.inputs.newUserId++
    showAdmin();
}

function adminRemoveUser(id) {
    let userIndex = searchUserIndex(id);
    let userBackup = model.users[userIndex];
    model.usersArchive.push(userBackup);
    model.users.splice(userIndex, 1);
    updateUser(false)
    console.log(userIndex);
    showAdmin();
}

function adminEditUser(id) {
    const adminInputs = model.inputs.admin;
    let userIndex = searchUserIndex(id);
    let stringified = JSON.stringify(model.users[userIndex]);
    let parsed = JSON.parse(stringified);
    adminInputs.editUserInputs = parsed;
    adminInputs.userIsEditing = true;
    console.log(userIndex);
    showAdmin();
}

function updateUser(really) {
    const adminInputs = model.inputs.admin;
    let userIndex = searchUserIndex(adminInputs.editUserInputs.id);
    document.getElementById('adminCheckboxEdit').checked ? adminInputs.editUserInputs.isAdmin = true : adminInputs.editUserInputs.isAdmin = false;
    let stringified = JSON.stringify(adminInputs.editUserInputs);
    let parsed = JSON.parse(stringified);
    really === true ? model.users[userIndex] = parsed : '';
    searchUserIndex(model.currentUserId) === -1 ? model.currentUserId = null : '';
    adminInputs.userIsEditing = false
    showAdmin()
}

function adminOrderHistoryRemove(index) {
    model.orderHistory[searchOrderHistoryIndex(model.inputs.admin.editUserInputs.id)].orderList.splice(index, 1);
    showAdmin();
}

function adminOrderHistoryDeliveredChange(index, delivered) {
    const orderHistory = model.orderHistory;
    const orderHistoryIndex = searchOrderHistoryIndex(model.inputs.admin.editUserInputs.id);
    delivered === true ? orderHistory[orderHistoryIndex].orderList[index].delivered = false : orderHistory[orderHistoryIndex].orderList[index].delivered = true;
    showAdmin();
}