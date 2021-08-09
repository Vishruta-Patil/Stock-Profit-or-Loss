const purchasePrice = document.querySelector(".purchase-price");
const quantity = document.querySelector(".quantity");
const currentPrice = document.querySelector(".current-price");
const checkBtn = document.querySelector(".check-btn");
const resultMsg = document.querySelector(".result-msg");
const imgContent = document.querySelector(".img-content");
const stocksStatusImg = document.querySelector("#stocks-img");

function stockPredictor() {
    var costPrice = purchasePrice.value * quantity.value;
    var sellingPrice = currentPrice.value  * quantity.value;

    if (sellingPrice > costPrice ) {
        var ProfitInAbsolute = sellingPrice - costPrice;
        var profitInPercentage = (ProfitInAbsolute/costPrice) * 100;
        resultMsg.classList.remove("hide");
        resultMsg.innerText = "You gained " + profitInPercentage.toFixed(2) +" %. Your total profit is ₹ " + ProfitInAbsolute; 
        displayImg("stonks-rise.gif");    
    }

    else {
        var lostInAbsolute = costPrice - sellingPrice;
        var lostInPercentage = (lostInAbsolute/costPrice) * 100;
        resultMsg.classList.remove("hide");
        resultMsg.innerText = "You lost " + lostInPercentage.toFixed(2) + " %. Your total lost is ₹ " + lostInAbsolute;
        displayImg("not-stonks.gif");
    }
}

function displayImg(img) {
    stocksStatusImg.src = img;
}

checkBtn.addEventListener("click", stockPredictor)