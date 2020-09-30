function login() {
    let username = '';
    let password = '';
    if (model.users.length <= 0) return alert('Ingen brukere er lagret!')
    for (i = 0; i < model.users.length; i++) {
        username = model.users[i].username;
        password = model.users[i].password;
        id = model.users[i].id;
        if (model.inputs.user.loginInput.username === username && model.inputs.user.loginInput.password === password) {
            model.currentUserId = id;
            return showF()
        }
    }
    showLogin()
    alert('Brukeren er ikke gjenkjent eller du har skrivd feil!')
}


function createUser() {
    const newUserInput = model.inputs.user.newUserInput;
    const newUserId = model.inputs.newUserId;
    model.users.push({
        id: newUserId,
        username: newUserInput.username,
        name: newUserInput.name,
        surname: newUserInput.surname,
        email: newUserInput.email,
        address: newUserInput.address,
        password: newUserInput.password,
        phoneNumber: newUserInput.phoneNumber,
        isAdmin: false,
    })

    model.orderHistory.push({
        id: model.inputs.newUserId,
        orderList: [],
        nextOrderId: 0,
    })
    model.inputs.user.createNewUserEdit = false;
    model.currentUserId = newUserId;
    model.inputs.newUserId++;
    showF()
}

function changeMenu(login, newUser) {
    if (login === true) model.inputs.user.createNewUserEdit = false;
    if (newUser === true) model.inputs.user.createNewUserEdit = true;
    showLogin()
}