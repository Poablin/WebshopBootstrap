function showHome() {
    appDiv.innerHTML = `

  <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
    <a class="navbar-brand" href="javascript:showA()">LUNCHPOWER</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav">
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
  
  <div class="container-fluid p-0" id="mainContent">
    ${showProductsList()}
    ${productShow2()}
  </div>
`;
}

const showProductsList = () => {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `
        <div class="container-fluid p-0 pb-3">
        <img class="img-fluid w-100" style="max-height:600px;" data-toggle="modal" data-target="#myModal" onclick="selectProduct(0)" src="${product[0].images[0]}"></img>
        <h3 class="text-center" onclick="selectProduct(0)">${product[0].name}</h3>
        </div>
        <div class="container-fluid">
        <div class="row">
    `;
    for (i = 1; i < product.length; i++) {
        html += `
        <div class="gridImg col-sm p-0 x">
        <img class=" img-fluid w-100 px-3" style="max-height:300px;" data-toggle="modal" data-target="#myModal" onclick="selectProduct(${i})" src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <p class="text-nowrap text-center" onclick="selectProduct(${i})">${product[i].name}</p>
        </div>
        `;
    }

    html += `
    </div>
    </div>`
    return html
}

function showRestProductsList() {
    const product = model.products;
    if (product.length <= 0) return '';
    let html = `<div class="grid-item5">`;
    for (i = 5; i < product.length; i++) {
        html += `
        <img src="${product[i].images === null ? '' : product[i].images[0]}"></img>
        <h3>${product[i].name}</h3>
        `;
    }
    html += `</div>`;
    return html
}