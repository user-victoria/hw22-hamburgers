/*
    - Мережа фастфудів пропонує кілька видів гамбургерів:
        * маленький (50 тугриків, 20 калорій);
        * великий (100 тугриків, 40 калорій).

    - Гамбургер може бути з одним із декількох видів начинок:
        * сиром (+ 10 тугриків, + 20 калорій);
        * салатом (+ 20 тугриків, + 5 калорій);
        * картоплею (+ 15 тугриків, + 10 калорій).

    - Можна додати добавки:
        * посипати приправою (+ 15 тугриків, 0 калорій);
        * полити майонезом (+ 20 тугриків, + 5 калорій).
*/
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

class Hamburger {
    static SIZE_SMALL = 'small';
    static SIZE_BIG = 'big';
    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';
    static TOPPING_SAUCE = 'sauce';
    static TOPPING_MAYO = 'mayonnaise';
    topping = [];
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }
    addTopping(selectedTopping) {
        this.topping.push(selectedTopping);
    }
    calculate() {
        let countCalories = 0;
        // size
        if (this.size === 'small') {
            countCalories += 20;
        }
        if (this.size === 'big') {
            countCalories += 40;
        }

        // stuffing
        if (this.stuffing === 'cheese') {
            countCalories += 20;
        }
        if (this.stuffing === 'salad') {
            countCalories += 5;
        }
        if (this.stuffing === 'potato') {
            countCalories += 10;
        }

        // topping
        if (this.topping.includes('mayonnaise')) {
            countCalories += 5;
        }
        if (this.topping.includes('sauce')) {
            countCalories += 0;
        }
        return countCalories;
    }
    calculatePrice() {
        let countPrice = 0;
        // size
        if (this.size === 'small') {
            countPrice += 50;
        }
        if (this.size === 'big') {
            countPrice += 100;
        }

        // stuffing
        if (this.stuffing === 'cheese') {
            countPrice += 10;
        }
        if (this.stuffing === 'salad') {
            countPrice += 20;
        }
        if (this.stuffing === 'potato') {
            countPrice += 15;
        }

        // topping
        if (this.topping.includes('mayonnaise')) {
            countPrice += 20;
        }
        if (this.topping.includes('sauce')) {
            countPrice += 15;
        }
        return countPrice;
    }
}

// Приклад роботи коду:

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log('hamburger', hamburger);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());