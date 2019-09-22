'use strict';

let money, time, expenseItem, costItem;

money = +prompt("Ваш бюджет на месяц");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  "budget" : money,
  "timeData" : time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
}

for (let i=0; i < 2; i++) {
  expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
  costItem = prompt("Во сколько обойдется?");
  appData.expenses[expenseItem];
  appData.expenses[expenseItem] = costItem;
}
console.log(appData);


let result = document.getElementById('result');
result.innerHTML = "You day budget: " + money/30 + " uh";

