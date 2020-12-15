function showBasket() {
    priceTotalCalculation()
    appDiv.innerHTML = `
${productShow()}
<div id="grid-container">
<div id="headerContent">
    <div class='logoWrap'>
        <a href="javascript:showA()">LUNCHPOWER</a>
    </div>
    <div class='inner-menu'>
        <ul class='menuWrap'>
            <li class='active'><a href="javascript:showA()">HOME</a></li>
            <li><a href="javascript:showB()">CART(${model.shoppingBasket.products.length})</a></li>
            <li><a href="javascript:showD()">HOW TO MAKE</a></li>
            ${userVerify(true, false) === true ? '<li><a href="javascript:showF()">ACCOUNT</a></li>' : '<li><a href="javascript:showG()">Logg inn</a></li>'}
            ${userVerify(false, true) === true ? '<li><a href="javascript:showC()">ADMIN</a></li>' : ''}
        </ul>
    </div>
</div>
<div id="mainContent">
    <button id="orderButton" onclick="orderProducts()">BESTILL</button>
    <div class="cartInfo">
        <div class="col1">
            <div>Antall</div>
        </div>
        <div class="col2">
            <div>${model.shoppingBasket.priceTotalAll === 0 ? 'Totaltmva: 0' + 'kr' : 'Totaltmva: ' + model.shoppingBasket.priceTotalAll + 'kr'} </div>
        </div>
        <div class="col3">
            <div>Moms</div>
        </div>
        <div class="col4">
            <div>Pris pr.stk</div>
        </div>
    </div>
    <ul class="basketList">
        ${listBasketProducts(searchUserIndex(model.currentUserId))}
    </ul>
        
</div>

    ${showMobileMenu()}

<div id="footerContentNoScroll">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>
`;
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })
}

function listBasketProducts() {
    let html = ``;
    for (i = 0; i < model.shoppingBasket.products.length; i++) {
        html += `
        <li>
            <div class="frame">
                <img onclick="selectProduct(${model.shoppingBasket.products[i].id})" src="${model.products[model.shoppingBasket.products[i].id].images[0]}">
            </div>
            <div class="infoText">
                <div class="itemName">
                    <span onclick="selectProduct(${model.shoppingBasket.products[i].id})">${model.products[model.shoppingBasket.products[i].id].name}</span>
                </div>
                <div class="itemPrice">
                    ${model.products[model.shoppingBasket.products[i].id].price} kr
                </div>
                <div class="itemInfo">
                    ${model.products[model.shoppingBasket.products[i].id].moms}%
                </div>
                <div class="itemTotalPrice">
                    ${model.shoppingBasket.products[i].priceTotal} kr
                </div>
            <div class="basketButtons">
                <i class="fas fa-plus-square" onclick="changeProductAmount(true, ${model.shoppingBasket.products[i].id})"></i>
                <input type="text" value="${model.shoppingBasket.products[i].amount}" onchange="changeProductAmount2(this.value, ${model.shoppingBasket.products[i].id})"></input>
                <i class="fas fa-minus-square" onclick="changeProductAmount(false, ${model.shoppingBasket.products[i].id})"></i>
                <button onclick="removeProduct(${model.shoppingBasket.products[i].id})">Fjern</button>
            </div>
        </li>
        `;
    }

    return html
}