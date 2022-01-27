/*
  This code allows to build your own pizza
  with any ingredients 
*/

export interface Pizza {
  name: string;
  ingredients: string[];
}

class PizzaBuilder {
  private _pizza: Pizza = {
    name: "Custom",
    ingredients: []
  };

  get ingredients(): string[] {
    return this._pizza.ingredients;
  }

  addIngredient(ingridient): void {
    this._pizza.ingredients.push(ingridient);
  }

  changeName(name): void {
    this._pizza.name = name;
  }
}

const myPizza = new PizzaBuilder();
myPizza.changeName("Margarita");
myPizza.addIngredient("tomatoes");
myPizza.addIngredient("cheese");
console.log(myPizza.ingredients);
