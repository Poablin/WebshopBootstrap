function addProduct(prodId) {
    const shoppingBasket = model.shoppingBasket.products;
    if (searchBasketProductIndex(prodId) === -1) {
        shoppingBasket.push({
            id: prodId,
            amount: 1,
            priceTotal: model.products[prodId].price,
        });
    } else {
        productIndex = searchBasketProductIndex(prodId);
        shoppingBasket[productIndex].amount++   
    }
    model.currentPage === 'Home' ? showHome() : showBasket();
    console.log(prodId)
}

function selectProduct(id) {
    model.productShowBox.productShownId = id;
    model.currentPage === 'Basket' ? showBasket() : showHome();
}

function deselectProduct() {
    const body = document.body;
    const scrollY = body.style.top;
    model.productShowBox.productShownId = null;
    model.productShowBox.currentImage = 0;
    model.productShowBox.currentTab = 0;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY) * -1);
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    model.currentPage === 'Basket' ? showBasket() : showHome();
}

function searchProductIndex(id) {
    let search = model.products.findIndex(searchid => searchid['id'] === id);
    return search
}
function searchUserIndex(id) {
    let search = model.users.findIndex(searchid => searchid['id'] === id);
    return search
}

function searchBasketProductIndex(id) {
    let search = model.shoppingBasket.products.findIndex(searchid => searchid['id'] === id);
    return search
}

function searchOrderHistoryIndex(id) {
    let search = model.orderHistory.findIndex(searchid => searchid['id'] === id);
    return search
}

function userVerify(existing, admin) {
    if (existing === true && model.currentUserId === null || searchUserIndex(model.currentUserId) === -1) return false
    if (admin === true && model.users[searchUserIndex(model.currentUserId)].isAdmin === false) return false
    return true
}

function showMobileMenu() {
    html = `     
<div class="mobileMenu">
    <span>
        <a href="javascript:showA()">
            <i class="footer-text fas fa-home fa-lg"></i>
        </a>
    </span>
    </span>
    <span>
        <a href="javascript:showF()">
            <i class="footer-text fas fa-user fa-lg"></i>
        </a>
    </span>
    <span>
        <a href="javascript:showB()">
            <i class="footer-text fas fa-shopping-cart fa-lg"></i>
        </a>
    </span>
</div>
`;

    return html
}

function logout() {
    model.currentUserId = null;
    showG()
}