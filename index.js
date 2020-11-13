console.log("conected");

// 1)   Using the default parameter technique, overload the overloadedFunc() function,
// which takes 3 arguments.
// For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2, for
// the 3rd - the function that returns the product of the first two arguments,
// and the function can multiply both arrays and numbers.

const fnc = (arg1, arg2) => {
  const newArr = [].concat(arg1);
  const outArr = [];
  newArr.map(function (element) {
    outArr.push(element * arg2);
  });
  if (outArr.length > 1) {
    return outArr;
  } else {
    return parseInt(outArr);
  }
};

function overloadedFunc(arg1 = [1, 2, 3], arg2 = 2, arg3 = fnc) {
  return arg3(arg1, arg2);
}

//2)
const privateSpeed = new WeakMap();
const privateWarning = new WeakMap();

class SpeedLimiter {
  constructor(speed, warningFn) {
    privateSpeed.set(this, speed);
    privateWarning.set(this, warningFn);
  }

  accelerate(value) {
    privateSpeed.set(this, privateSpeed.get(this) + value);
    console.log(`Current speed: ${privateSpeed.get(this)} km/h`);
    if (privateSpeed.get(this) > 200) {
      privateWarning.get(this)();
      privateSpeed.set(this, 200);
      console.log(`Current speed: ${privateSpeed.get(this)} km/h`);
    }
  }
}

//3
const upperCase = (value) => {
  return value.toString().toUpperCase();
};

const tripleExclaim = (value) => {
  return value.toString() + "!!!";
};

const copy = (value) => {
  const copy = value.toString();
  return copy + " " + copy;
};

const split = (val) => val.split("_");

const join = (arr) => arr.join(" ");

const result = (val) => {
  const firstAction = upperCase(val);
  const secondAction = tripleExclaim(firstAction);
  const thirdAction = copy(secondAction);
  const forthAction = split(thirdAction);
  return join(forthAction);
};

//4)
class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }
  static sortFlightRange(planesArray) {
    planesArray
      .sort(
        (plane1, plane2) => plane1.calcFlightRange() - plane2.calcFlightRange()
      )
      .forEach((plane) =>
        console.log(`${plane.model}: ${plane.calcFlightRange()}`)
      );
  }
  calcFlightRange(additionalFuel = 0) {
    return ((this.fuelSupply + additionalFuel) / this.fuelConsumption) * 100;
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
  calcFlightRange() {
    return super.calcFlightRange(this.addTank);
  }
}

class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
  calcFlightRange() {
    return super.calcFlightRange(this.addTank);
  }
}

class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }
  calcFlightRange() {
    return super.calcFlightRange() * this.aerodynamicsKoef;
  }
}

// 5)
const pizzaMenu = {
  SIZE_S: { param: "SIZE_S", price: 60, calorie: 300 },
  SIZE_M: { param: "SIZE_M", price: 90, calorie: 450 },
  SIZE_L: { param: "SIZE_L", price: 110, calorie: 600 },
  KIND_MEAT: { param: "KIND_MEAT", price: 55, calorie: 230 },
  KIND_FISH: { param: "KIND_FISH", price: 70, calorie: 150 },
  KIND_CHEESE: { param: "KIND_CHEESE", price: 50, calorie: 200 },
  KIND_VEGETARIAN: { param: "KIND_VEGETARIAN", price: 35, calorie: 50 },
  INGREDIENT_TOMATOES: { param: "INGREDIENT_TOMATOES", price: 15, calorie: 5 },
  INGREDIENT_PEPPER: { param: "INGREDIENT_PEPPER", price: 18, calorie: 5 },
  INGREDIENT_BACON: { param: "INGREDIENT_BACON", price: 25, calorie: 40 },
  INGREDIENT_OLIVES: { param: "INGREDIENT_OLIVES", price: 20, calorie: 0 },
};

class PizzaMaker {
  constructor(size, kind, ingredient) {
    this.size = size;
    this.kind = kind;
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    if (!this.ingredients.some((ing) => ing.param === ingredient.param)) {
      this.ingredients = this.ingredients.concat(ingredient);
      console.log(`${ingredient.param} has been added`);
    } else {
      console.log("Such an ingredient already exists!");
    }
  }

  deleteIngredient(ingredient) {
    this.ingredients = this.ingredients.filter(
      (ing) => ing.param !== ingredient.param
    );
    console.log(`${ingredient.param} has been deleted`);
  }

  getIngredients() {
    return this.ingredients;
  }

  getSize() {
    return this.size.param;
  }

  getKind() {
    return this.kind.param;
  }

  calculatePrice() {
    return this.ingredients.reduce(
      (acc, val) => val.price + acc,
      this.size.price + this.kind.price
    );
  }

  calculateCalories() {
    return this.ingredients.reduce(
      (acc, val) => val.calorie + acc,
      this.size.calorie + this.kind.calorie
    );
  }
}
