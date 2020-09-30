function changeImage(num) {
    model.productShowBox.currentImage = num;
    model.currentPage === 'Basket' ? showBasket() : showHome();
}

function changeTab(num) {
    model.productShowBox.currentTab = num;
    model.currentPage === 'Basket' ? showBasket() : showHome();
}