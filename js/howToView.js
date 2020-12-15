function showHowTo() {
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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/oRzlU0ryKcY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div id="howToSteps">
            <div class="stepsDiv">
                <h3>STEP 1</h3>
                    Varm vann
            </div>
            <br>
            <div class="stepsDiv">
                <h3>STEP 2</h3>
                    Bland sammen i kopp
            </div>
            <br>
            <div class="stepsDiv">
                <h3>STEP 3</h3>
                    ???
            </div>
            <br>
            <div class="stepsDiv">
                <h3>STEP 4</h3>
                    profit
            </div>
            <br><br>
        </div>
</div>

<footer  class="page-footer font-small blue pt-4">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</footer>
`
}