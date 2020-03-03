$(document).ready(function () {
    $('#checkout').click(function (event) {
        event.preventDefault();
        var flavours = parseInt($("#flavours :selected").val())
        var size = parseInt($("#sizes :selected").val())
        var crust = parseInt($("#crusts :selected").val())
        var toppings = parseInt($("#toppings :selected").val())
        var number = parseInt($("#number").val())

        var total = flavours + size + crust + toppings;
        var grandTotal = total * number;

        $("ul#list").append(
            "<li>" + "Your pizza flavour is : " + $("#flavour option:selected").text() + "</li>" +
            "<li>" + "Your pizza size is : " + $("#size option:selected").text() + "</li>" +
            "<li>" + "Your pizza crust is : " + $("#crust option:selected").text() + "</li>" +
            "<li>" + "Your pizza topping is : " + $("#toppings option:selected").text() + "</li>" +
            "<li>" + "Number of pizza ordered is : " + number + "</li>" +
            "<li>" + "Total amount to be paid is : Ksh" + grandTotal + "</li>");

    })
$(".Deliver").click(function () {
    var fields = prompt("Enter your address")
    prompt("Enter your name")
    prompt("Enter your location")
    alert("Your order will be delivered at" + fields)
    alert("Delivery cost is Kshs 100")
})
$(".delivery").click(function () {
    alert("Pick your order in our nearest shop")
});

var pizzaSize = ["Small", "Medium", "Large", "Mega"];
var baseSize = ["Thin", "Medium", "Thick"];
var toppping = ["Pepperoni", "Mushrooms", "Onions", "Sausage", "Bacon", "Extra Cheese", "Black Olives", "Green Peppers", "Pineapple", "Spinach"];
var amount = 0;
var adder = 0;
var valueTaker;
var baseValueTaker, base;
var toppingValueTaker, toppingTaker;
var selectedSize, selectedBase, selectedTopping;
var myNewPizza;
// 3
//Testing pizza selector using Constructor Functions
//This will be used for a category that a user can add/create their own custom pizza recipe/style
function myPizza(selectedSize, base, amount){
    this.selectedSize = selectedSize;
    this.base = base;
    this.amount = amount;
}
function newPizza(){
    myNewPizza = new myPizza(selectedTopping, selectedSize, amount, base);
}
// 1
//Pizza toppings handlers
function selectingTopping(){
    if(selectedSize=="Small"){
        toppingValueTaker = 0;
    }else if(selectedSize=="Medium"){
        toppingValueTaker = 50;
    }else if(selectedSize=="Large"){
        toppingValueTaker = 150;
    }else if(selectedSize=="Mega"){
        toppingValueTaker = 250;
    }else{
        alert("Pick a topping and pizza size");
    }
}
// 2
//Selecting toppings handlers
function pepperoni(){
    selectedTopping = toppping[0];
}
function mushrooms(){
    selectedTopping = toppping[1];
}
function onions(){
    selectedTopping = toppping[2];
}
function sausage(){
    selectedTopping = toppping[3];
}
function bacon(){
    selectedTopping = toppping[4];
}
function extraCheese(){
    selectedTopping = toppping[5];
}
function blackOlives(){
    selectedTopping = toppping[6];
}
function greenPeppers(){
    selectedTopping = toppping[7];
}
function pineapple(){
    selectedTopping = toppping[8];
}
function spinach(){
    selectedTopping = toppping[9];
}
// 2
//Pizza size selection handlers
function pizzasmall(){
    valueTaker = document.getElementById('small').value;
    selectedSize = pizzaSize[0];
}
function pizzamedium(){
    valueTaker = document.getElementById('medium').value;
    selectedSize = pizzaSize[1];
}
function pizzalarge(){
    valueTaker = document.getElementById('large').value;
    selectedSize = pizzaSize[2];
}
function pizzamega(){
    valueTaker = document.getElementById('mega').value;
    selectedSize = pizzaSize[3];
}
// 2
//Base selection handlers
function thinbase(){
    selectedBase = document.getElementById('thinbase').value;
}
function mediumbase(){
    selectedBase = document.getElementById('mediumbase').value;
}
function thickbase(){
    selectedBase = document.getElementById('thickbase').value;
}
// 1
//Pizza amount handler for checkout
function pizzasize(){
    if(valueTaker==500){
        amount = adder + baseValueTaker + toppingValueTaker + 500;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==700){
        amount = adder + baseValueTaker + toppingValueTaker + 700;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==1000){
        amount = adder + baseValueTaker + toppingValueTaker + 1000;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        amount = 0;
        selectedSize = null;
    }else if(valueTaker==1200){
        amount = adder + baseValueTaker + toppingValueTaker + 1200;
        alert(`You have selected ${selectedSize} pizza size with ${base} base and ${selectedTopping} topping. Your amount is ${amount} .`);
        amount = 0;
        selectedSize = null;
    }
}
// 1
//Base size handlers for pricing
function pizzaBaseSize(){
    if(selectedBase=="thin"){
        base = baseSize[0];
        baseValueTaker = 0;
    }else if(selectedBase=="medium"){
        base = baseSize[1];
        baseValueTaker = 100;
    }else if(selectedBase=="thick"){
        base = baseSize[2];
        baseValueTaker = 200;
    }
}