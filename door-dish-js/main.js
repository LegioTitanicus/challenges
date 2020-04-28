// MENU:
const pizza = 15.0;
const extraCheese = 2.0;
const deliveryFee = 3.0;
let driverTip = 0.0;

// Buttons
let button = document.getElementById(button1);
let startOrder = button.addEventListener(
  "click",
  startOrdering(deliveryOrTakeout, pizzas, xtracheese)
);

// Initilize functions
let deliveryOrTakeout;
let pizzas;
let xtracheese;

function startOrdering(deliveryOrTakeout, pizzas, xtracheese) {
  alert(
    `Hello hungry friend! Welcome to Doordish, where the pizza comes to you! Is your order takeout or delivery?`
  );
  confirmDelivery(deliveryOrTakeout);
  confirmQuantity(pizzas);
  confirmCheese(xtracheese);
}

function confirmDelivery(deliveryOrTakeout) {
  let noConfirm = false;
  while (noConfirm == false) {
    choice = deliveryQuestion(deliveryOrTakeout);
    noConfirm = confirm(`Are you sure you want ${choice}`);
  }
  if (noConfirm == true) {
    console.log(`You are getting ${choice}`);
  }
}

function deliveryQuestion(deliveryOrTakeout) {
  while (deliveryOrTakeout != "takeout" && deliveryOrTakeout != "delivery") {
    console.log(`Hello hungry friend!  Welcome to Doordish, where the pizza comes to you!
        Is your order takeout or delivery.`);
    deliveryOrTakeout = prompt(`Is your order takeout or delivery.`);
  }
  return deliveryOrTakeout;
}

function confirmQuantity(pizzas) {
  let noConfirm = false;
  while (noConfirm == false) {
    choice = quantity(pizzas);
    noConfirm = confirm(`Are you sure you want ${choice}`);
  }
  if (noConfirm == true) {
    console.log(`You are getting ${choice}`);
  }
}

function quantity(pizzas) {
  console.log(`How many pizzas would you like?`);
  pizzas = prompt(`How many pizzas would you like`);
  pizzaIsInt = parseInt(pizzas);

  while (isNaN(pizzaIsInt)) {
    console.log(`How many pizzas would you like?`);
    pizzas = prompt(`How many pizzas would you like`);
    pizzaIsInt = parseInt(pizzas);
  }
  return pizzaIsInt;
}

function confirmCheese(xtracheese) {
  let noConfirm = false;
  while (noConfirm == false) {
    choice = amountOfCheese(xtracheese);
    if ((choice = true)) {
      noConfirm = confirm(`Are you sure you want extra cheese?`);
    } else {
      noConfirm = confirm(`Are you sure you don't want extra cheese?`);
    }
  }
  if (noConfirm == true) {
    if (choice == true) {
      console.log(`You are getting extra cheese`);
    } else {
      console.log(`You are not getting extra cheese`);
    }
  }
}

function amountOfCheese(xtracheese) {
  console.log("Would you like extra cheese?");
  while (xtracheese != "Y" && xtracheese != "n") {
    xtracheese = prompt("Would you like extra cheese? Y/n");
    console.log(xtracheese);
  }
  if (xtracheese == "Y") {
    return true;
  }
}
