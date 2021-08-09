const purchasePrice = document.querySelector(".purchase-price");
const quantity = document.querySelector(".quantity");
const currentPrice = document.querySelector(".current-price");
const checkBtn = document.querySelector(".check-btn");
const resultMsg = document.querySelector(".result-msg");

function stockPredictor() {
    var costPrice = purchasePrice.value * quantity.value;
    var sellingPrice = currentPrice.value  * quantity.value;

    if (sellingPrice > costPrice ) {
        var ProfitInAbsolute = sellingPrice - costPrice;
        var profitInPercentage = (ProfitInAbsolute/costPrice) * 100;
        resultMsg.innerText = "You gained " + profitInPercentage.toFixed(2) +" %. Your total profit is " + ProfitInAbsolute;
        
    }

    else {
        var lostInAbsolute = costPrice - sellingPrice;
        var lostInPercentage = (lostInAbsolute/costPrice) * 100;
        resultMsg.innerText = "You lost ", lostInPercentage.toFixed(2), " %. Your total lost is ", lostInAbsolute;
    }
}

checkBtn.addEventListener("click", stockPredictor)