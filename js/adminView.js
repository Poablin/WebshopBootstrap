function showAdmin() {
    const adminInputs = model.inputs.admin;
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
    <div class="products">
        ${adminShowProductsDiv()}

        <div class="showproducts">
            <ul>
            ${adminShowProductsList()}
            </ul>
        </div>
    </div>

    <div class="stats">
        <div>
            <h3>Stats</h3>
        </div>
        <div class="showchart">
            <canvas id="myChart"></canvas>
            <br>
        </div>
        <div class="showpgraph">
        </div>
    </div>
    
    <div class="users">
        ${adminShowUsersDiv()}
    </div>
        <div class="showusers">
            <ul>
            ${adminShowUsersList()}
            </ul>
        </div>

        <div class="showUsersOrders" ${adminInputs.userIsEditing === false ? 'style="display: none"' : ''}>
            <ul>
                ${adminShowOrderHistory()}
            </ul>
        </div>
    </div>

    ${showMobileMenu()} 

<div id="footerContentNoScroll">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>
    `;

    showChart();
}

function adminShowProductsDiv() {
    const adminInputs = model.inputs.admin;
    let html = '';
    html = `
    <h3>Products</h3>
    <div id="addProductDiv">
        <form action="javascript:adminAddNewProduct()" ${adminInputs.productIsEditing === true ? 'style="display: none"' : ''}>
            <button type="submit">Add Product</button>
            <label for="productName">Name:</label>
            <input id="productName" type="text" placeholder="name" onchange="model.inputs.admin.newProductInputs.name = this.value" required></input>
            <input type="text" placeholder="productInfo" onchange="model.inputs.admin.newProductInputs.productInfo = this.value" required></input>
            <input type="text" placeholder="contents" onchange="model.inputs.admin.newProductInputs.contents = this.value" required></input> <br>
            <input type="text" placeholder="price" onchange="model.inputs.admin.newProductInputs.price = this.value" required></input>
            <input type="text" placeholder="calories" onchange="model.inputs.admin.newProductInputs.calories = this.value" required></input>
            <input type="text" placeholder="allergies" onchange="model.inputs.admin.newProductInputs.allergies = this.value" required></input>
            <input type="text" placeholder="moms" onchange="model.inputs.admin.newProductInputs.moms = this.value" required></input>
            <input type="file">Upload images</input>
        </form>
    </div>
    <div id="editProductDiv">
        <form action="javascript:updateProduct(true)" ${adminInputs.productIsEditing === false ? 'style="display: none"' : ''}>
            <button type="submit">Edit Product</button> <button type="button" onclick="updateProduct(false)">Cancel</button>
            <input type="text" placeholder="name" value="${adminInputs.editProductInputs.name}" onchange="model.inputs.admin.editProductInputs.name = this.value" required></input>
            <input type="text" placeholder="productInfo" value="${adminInputs.editProductInputs.productInfo}" onchange="model.inputs.admin.editProductInputs.productInfo = this.value" required></input>
            <input type="text" placeholder="contents" value="${adminInputs.editProductInputs.contents}" onchange="model.inputs.admin.editProductInputs.contents = this.value" required></input> <br>
            <input type="text" placeholder="price" value="${adminInputs.editProductInputs.price}" onchange="model.inputs.admin.editProductInputs.price = this.value" required></input>
            <input type="text" placeholder="calories" value="${adminInputs.editProductInputs.calories}" onchange="model.inputs.admin.editProductInputs.calories = this.value" required></input>
            <input type="text" placeholder="allergies" value="${adminInputs.editProductInputs.allergies}" onchange="model.inputs.admin.editProductInputs.allergies = this.value" required></input>
            <input type="text" placeholder="moms" value="${adminInputs.editProductInputs.moms}" onchange="model.inputs.admin.editProductInputs.moms = this.value" required></input>
            <input type="file">Upload images</input>
        </form>
    </div>
    `;
    return html
}

function adminShowUsersDiv() {
    const adminInputs = model.inputs.admin;
    let html = '';
    html += `        
    <div>
        <h3>Users</h3>
        <div id="addUsersDiv">
            <form action="javascript:adminAddUser()" ${adminInputs.userIsEditing === true ? 'style="display: none"' : ''}>
                <button type="submit">Add User</button>
                <input type="text" placeholder="Username" onchange="model.inputs.admin.newUserInputs.username = this.value" required></input>
                <input type="text" placeholder="First name" onchange="model.inputs.admin.newUserInputs.name = this.value" required></input>
                <input type="text" placeholder="Surname" onchange="model.inputs.admin.newUserInputs.surname = this.value" required></input>
                <input type="text" placeholder="E-mail" onchange="model.inputs.admin.newUserInputs.email = this.value" required></input>
                <input type="text" placeholder="Phone Number" onchange="model.inputs.admin.newUserInputs.phoneNumber = this.value" required></input>
                <input type="text" placeholder="Address" onchange="model.inputs.admin.newUserInputs.address = this.value" required></input>
                <input type="text" placeholder="Password" onchange="model.inputs.admin.newUserInputs.password = this.value" required></input>
                <label for="admin">Admin
                <input type="checkbox" id="adminCheckboxNew">
                </label>
            </form>
        </div>
        <div id="editUsersDiv">
            <form action="javascript:updateUser(true)" ${adminInputs.userIsEditing === false ? 'style="display: none"' : ''}>
                    <button type="submit">Edit User</button> <button type="button" onclick="updateUser(false)">Cancel</button>
                    <input type="text" placeholder="Username" value="${adminInputs.editUserInputs.username}" onchange="model.inputs.admin.editUserInputs.username = this.value" required></input>
                    <input type="text" placeholder="First name" value="${adminInputs.editUserInputs.name}" onchange="model.inputs.admin.editUserInputs.name = this.value" required></input>
                    <input type="text" placeholder="Surname" value="${adminInputs.editUserInputs.surname}" onchange="model.inputs.admin.editUserInputs.surname = this.value" required></input>
                    <input type="text" placeholder="E-mail" value="${adminInputs.editUserInputs.email}" onchange="model.inputs.admin.editUserInputs.email = this.value" required></input>
                    <input type="text" placeholder="Phone Number" value="${adminInputs.editUserInputs.phoneNumber}" onchange="model.inputs.admin.editUserInputs.phoneNumber = this.value" required></input>
                    <input type="text" placeholder="Address" value="${adminInputs.editUserInputs.address}" onchange="model.inputs.admin.editUserInputs.address = this.value" required></input>
                    <input type="text" placeholder="Password" value="${adminInputs.editUserInputs.password}" onchange="model.inputs.admin.editUserInputs.password = this.value" required></input>
                    <label for="adminCheckboxEdit">Admin
                    <input type="checkbox" id="adminCheckboxEdit" ${adminInputs.editUserInputs.isAdmin === true ? 'checked' : ''}>
                    </label>
            </form>
        </div>`;
        return html
}

function adminShowProductsList() {
    let list = '';
    for (i = 0; i < model.products.length; i++) {
        list += `<li>${model.products[i].name} 
             <button class="removeBtn" onclick="adminRemoveProduct(${model.products[i].id})">Remove</button> 
             <button class="editBtn" onclick="adminEditProduct(${model.products[i].id})">Edit</button>
             </li>`
    }
    return list
}

function adminShowUsersList() {
    let list = '';
    for (i = 0; i < model.users.length; i++) {
        list += `<li>${model.users[i].name + ' ' + model.users[i].surname} 
             <button class="removeBtn" onclick="adminRemoveUser(${model.users[i].id})">Remove</button> 
             <button class="editBtn" onclick="adminEditUser(${model.users[i].id})">Edit</button></li>`
    }
    return list
}

function adminShowOrderHistory() {
    if (model.inputs.admin.editUserInputs.id === null) return
    const orderList = model.orderHistory[searchOrderHistoryIndex(model.inputs.admin.editUserInputs.id)].orderList;
    let list = '';
    if (orderList.length <= 0) {
        list = `<p>Brukern har ingen bestillinger</p>`
    } else {
        for (index = 0; index < orderList.length; index++) {
            list += adminGetOrderList(index)
        }
    }
    return list
}

function adminGetOrderList(id) {
    const orderList = model.orderHistory[searchOrderHistoryIndex(model.inputs.admin.editUserInputs.id)].orderList;
    let list = `
    <div><h1>Order Nummer: ${orderList[id].orderId + 1}</h1>
    <p>Order Id:${orderList[id].orderId}</p>`;
    for (i = 0; i < orderList[id].productsName.length; i++) {
        list += `
        <p>Produkt ${i + 1}: ${orderList[id].productsName[i]}</p>
        <p>Mengde: ${orderList[id].productsAmount[i]}</p>
        <p>Produkt totalt: ${orderList[id].productsPriceTotal[i]}kr</p>
        `;
    }
    list += `<p>Levert: ${orderList[id].delivered === true ? 'Ja' : 'Nei'}</p>
            <p>Totalpris:${orderList[id].priceTotalAll}kr</p></div>
            <button onclick="adminOrderHistoryRemove(${id})">Slett</button>
            <button onclick="adminOrderHistoryDeliveredChange(${id}, ${orderList[id].delivered === true ? 'true' : 'false'})">Endre leverings status</button>
            `
    return list
}

function showChart() {
    let data = [];
    for (i = 0; i < model.purchaseHistory.length; i++) {
        data.push(model.purchaseHistory[i].amount)
    };
    let labels = [];
    for (index = 0; index < model.products.length; index++) {
        labels.push(model.products[index].name)
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: 'Antall Salg',
                backgroundColor: 'rgb(255, 99, 132)',
                hoverBorderColor: '#000000',
                hoverBorderWidth: '1',

                data: data,
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: 'black',
                    },

                }],
                xAxes: [{
                    ticks: {
                        fontColor: 'black',
                        fontSize: 15,
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'black'
                }
            },
            maintainAspectRatio: false,
        }
    });
}