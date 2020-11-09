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
