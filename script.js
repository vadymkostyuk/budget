"use strict"
let money, time;

function start (){
    money = +prompt('Ваш бюдшет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюдшет на месяц?', '');
    }
}
start();
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b = prompt('Во сколько обойдется?', '');
        if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }

    }
}
chooseExpenses();

// Цикл While
// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let b = prompt('Во сколько обойдется?', '');
//     if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Error");
//         i--;
//     }

//     i++
// }
// Цикл Do While
// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let b = prompt('Во сколько обойдется?', '');
//     if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Error");
//         i--;
//     }
//
//     i++;
// }
// while (i < 2);

function chooseOptExpenses() {
    for (let e = 1; e <= 3; e++){
        let questionOptExpenses = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[e] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "uah");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel()


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какая сума накоплений?');
        let persent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*persent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

