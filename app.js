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

    if (costPrice<0 || sellingPrice<0) {
        resultMsg.classList.remove("hide");
        resultMsg.innerText = "Please enter value greater than 0";
        displayImg("img2.jfif")
    }
    
     else if (sellingPrice > costPrice  ) {
        var ProfitInAbsolute = sellingPrice - costPrice;
        var profitInPercentage = (ProfitInAbsolute/costPrice) * 100;
        resultMsg.classList.remove("hide");
        displayImg("stonks-rise.gif");
        resultMsg.innerText = "You gained " + profitInPercentage.toFixed(2) +" %. Your total profit is ₹ " + ProfitInAbsolute;        
    }

    else {
        var lostInAbsolute = costPrice - sellingPrice;
        var lostInPercentage = (lostInAbsolute/costPrice) * 100;
        resultMsg.classList.remove("hide");
        displayImg("not-stonks.gif");
        resultMsg.innerText = "You lost " + lostInPercentage.toFixed(2) + " %. Your total lost is ₹ " + lostInAbsolute;
        
    }    
}

function displayImg(img) {
    stocksStatusImg.src = img;
}

checkBtn.addEventListener("click", stockPredictor)