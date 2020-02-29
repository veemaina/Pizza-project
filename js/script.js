$(".Delivery").click(function () {
    var fields = prompt("Enter your address")
    prompt("Enter your name")
    prompt("Enter your location")
    alert("Your order will be delivered at" + fields)
    alert("Delivery cost is Kshs 100")
})
$(".deliver").click(function () {
    alert("Pick your order in our nearest shop")
});