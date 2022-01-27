/*
  This code allows to add only one pizza
  to the bake
*/

class Pizza {
    name = "Carbonara";
    ingredients = ["cheese"];
}

class Bake {
    static #pizza

    static cookPizza() {
        if (!this.#pizza) {
            this.#pizza = new Pizza();
        }

        return this.#pizza
    }
}

Bake.cookPizza() == Bake.cookPizza() // true
