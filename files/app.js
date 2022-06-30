var millkTotalPrice = 0;
var sugarTotalPrice = 0;
var boostTotalPrice = 0;

function millk() {
    millkTotalPrice = 40 * document.getElementById('millkOPtion').value
    document.getElementById('millkTotalPrice').innerHTML = millkTotalPrice
    grandTotal()
}
var sugarTotalPrice;
function sugar() {
    sugarTotalPrice = 30 * document.getElementById('sugarOPtion').value
    document.getElementById('sugarTotalPrice').innerHTML = sugarTotalPrice
    grandTotal()
}

function boost() {
    boostTotalPrice = 10 * document.getElementById('boostOption').value
    document.getElementById('boostTotalPrice').innerHTML = boostTotalPrice
    grandTotal()
}

function grandTotal() {
    var gst = 0;
    var totalPrice = millkTotalPrice + sugarTotalPrice + boostTotalPrice
    document.getElementById('totalPrice').innerHTML = totalPrice

    gst = totalPrice * 0.18
    var gst2 = gst. toFixed(2);
    document.getElementById('gst').innerHTML = gst2

    Total = (gst + totalPrice)
    document.getElementById('Total').innerHTML = Total
    console.log(Total)

}