function showLogin() {
    appDiv.innerHTML = `
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

<div id="loginMenu">
    ${loginMenu()}
</div>

<div class="questionButtons">
                <ul>
                    <span>
                        <a href="javascript:showD()">
                            <li>How To Make</li>
                        </a>
                    </span>
                    <li><a></a>TEST</li>
                    <li><a></a>TEST</li>
                 </ul>
            </div>
</div>

${showMobileMenu()}
    
<div id="footerContent">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>

`;
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    })
}

function loginMenu() {
    let html = `
    <div ${model.inputs.user.createNewUserEdit === false ? '' : 'style="display:none;"'} id="loginMenu">
        <div class="createNewUserDiv">
            <form action="javascript:login()">
                <input type="text" placeholder="Brukernavn" onchange="model.inputs.user.loginInput.username = this.value" required></input>
                <input type="password" placeholder="Passord" onchange="model.inputs.user.loginInput.password = this.value" required></input>
                <button type="submit">Log inn</button>
                <button type="button" onclick="changeMenu(false, true)">Lag ny bruker</button>
            </form>
        </div>
    </div>

    <div ${model.inputs.user.createNewUserEdit === true ? '' : 'style="display:none;"'} id="createUserMenu">
        <div class="createNewUserDiv">
            <form action="javascript:createUser()">
                <input type="text" placeholder="Brukernavn" onchange="model.inputs.user.newUserInput.username = this.value" required></input>
                <input type="password" placeholder="Passord" onchange="model.inputs.user.newUserInput.password = this.value" required></input>
                <input type="text" placeholder="Fornavn" onchange="model.inputs.user.newUserInput.name = this.value" required></input>
                <input type="text" placeholder="Etternavn" onchange="model.inputs.user.newUserInput.surname = this.value" required></input>
                <input type="text" placeholder="Email" onchange="model.inputs.user.newUserInput.email = this.value" required></input>
                <input type="text" placeholder="Telefon nummer" onchange="model.inputs.user.newUserInput.phoneNumber = this.value" required></input>
                <input type="text" placeholder="Addresse" onchange="model.inputs.user.newUserInput.address = this.value" required></input>
                <button type="submit">Lag bruker</button>
                <button type="button" onclick="changeMenu(true, false)">Logg inn istedenfor?</button>
            </form>
        </div>
    </div>
    `;

    return html
}