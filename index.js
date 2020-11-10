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
