function showBasket() {
    priceTotalCalculation()
    appDiv.innerHTML = `

<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
<a class="navbar-brand" href="javascript:showA()">LUNCHPOWER</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
  <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link" href="javascript:showA()">HOME</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="javascript:showB()">CART(${model.shoppingBasket.products.length})</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="javascript:showD()">HOW TO MAKE</a>
  </li>
    ${userVerify(true, false) === true ? '<li class="nav-item"><a class="nav-link" href="javascript:showF()">ACCOUNT</a></li>' : '<li class="nav-item"><a class="nav-link" href="javascript:showG()">LOGG INN</a></li>'}
    ${userVerify(false, true) === true ? '<li class="nav-item"><a class="nav-link" href="javascript:showC()">ADMIN</a></li>' : ''}   
  </ul>
</div>
</nav>

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
                <img width="200" height="100" onclick="selectProduct(${model.shoppingBasket.products[i].id})" src="${model.products[model.shoppingBasket.products[i].id].images[0]}">
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
                <button  onclick="changeProductAmount(true, ${model.shoppingBasket.products[i].id})">+</button>
                <input type="text" value="${model.shoppingBasket.products[i].amount}" onchange="changeProductAmount2(this.value, ${model.shoppingBasket.products[i].id})"></input>
                <button onclick="changeProductAmount(false, ${model.shoppingBasket.products[i].id})">-</button>
                <button onclick="removeProduct(${model.shoppingBasket.products[i].id})">Fjern</button>
            </div>
        </li>
        `;
    }

    return html
}