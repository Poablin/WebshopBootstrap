function productShow2() {
    const product = model.products;
    const productShownId = model.productShowBox.productShownId;
    const productsLength = model.products.length;
    let html = `
    <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">${productsLength <= 0 ? '' : product[productShownId || 0].name}</h4>

          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>


        <!-- Modal body -->
        <div class="modal-body">
            <div class="container-fluid p-0">
                <img class="img-fluid w-50" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[model.productShowBox.currentImage]}"></img>
                <p class="float-right">${productsLength <= 0 ? '' : product[productShownId || 0].price} kr</p>
            </div>
            <div role="tabpanel">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Innhold</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Næringsinnhold</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Alternativer</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>
            </div>
        </div>
  
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>
  </div>
  `
  return html
}

function productShow() {
    const product = model.products;
    const productShownId = model.productShowBox.productShownId;
    const productsLength = model.products.length;

    let html = '';

    html = `
<div  id="prodShow" class="prodShow" ${productShownId != null ? '' : 'style="visibility: hidden"'}>
    <div  onclick="deselectProduct()" class="prodOverlay"></div>
    <div id="productBox">
        <div class="outerImages">
            <div class="topProdImg">
                <img src="${productsLength <= 0 ? '' : product[productShownId || 0].images[model.productShowBox.currentImage]}"></img>
            </div>
            <div class="slideshow">
                <div class="slides">
                    <img onclick="changeImage(1)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[1]}">
                    <img onclick="changeImage(2)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[2]}">
                    <img onclick="changeImage(3)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[3]}">
                    <img onclick="changeImage(4)" src="${productsLength <= 0 ? '' : product[productShownId || 0].images[4]}">
                </div>
            </div>
            </div>
        <div class="outerText">
            <h3>${productsLength <= 0 ? '' : product[productShownId || 0].name} ${productsLength <= 0 ? '' : product[productShownId || 0].price}kr</h3>
            <div class="prodBtns">
                <button class="innholdBtn" onclick="changeTab(0)">Innhold</button>  <button class="naeringBtn" onclick="changeTab(1)">Næringsinnhold</button>  <button class="altBtn" onclick="changeTab(2)">Alternativer</button>
            </div>
            <div id="productInfo" ${model.productShowBox.currentTab === 0 ? '' : 'style="display: none"'}>
                <p>${productsLength <= 0 ? '' : product[productShownId || 0].productInfo}</p> 
            </div>
            
            <div id="content" ${model.productShowBox.currentTab === 1 ? '' : 'style="display: none"'}>
            <ul style="list-style-type: none">
            ${showContents()}
            </ul>
            </div>

            <div id="alternatives" ${model.productShowBox.currentTab === 2 ? '' : 'style="display: none"'}>
            <p>Her skal bli alts</p>
            </div>
        </div>
        <div class="shopBtns">
            <input class="addBtn" type="button" value="${searchBasketProductIndex(productShownId || 0) === -1 ? 'Legg til i handlekurv' : 'Legg til igjen'}" onclick="addProduct(${productShownId || 0})">
            <input class="continueBtn" type="button" value="Fortsett å handle" onclick="deselectProduct(), showA()">
            ${model.shoppingBasket.products.length <= 0 ? '' : '<input class="continueBtn" type="button" value="Gå til handlekurv" onclick="deselectProduct(), showB()">'}
        </div>
    </div>
</div>`;

    return html
}

function showContents() {
    const product = model.products;
    const productShownId = model.productShowBox.productShownId;
    let html = '';
    if (model.products.length <= 0) return
    for (i = 0; i < product[productShownId || 0].contents.length; i++) {
        html += `<li>${product[productShownId || 0].contents[i]}</li></br>`
    }
    return html
}