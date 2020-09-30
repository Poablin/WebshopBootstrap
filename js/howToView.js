function showHowTo() {
    appDiv.innerHTML = `<div id="grid-container">
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

${showMobileMenu()}

<div id="footerContent">
    <a href="#" class="footer-text">LUNCHPOWER</a>
</div>
</div>

`
}