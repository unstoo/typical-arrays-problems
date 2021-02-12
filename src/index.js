
exports.min = function min (array) {
  if (!array) return 0;
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  var currentMin = array[0];

  array.forEach(number => {
    if(number < currentMin) currentMin = number
  });

  return currentMin;
}

exports.max = function max (array) {
  if (!array) return 0;
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  var currentMax = array[0];

  array.forEach(number => {
    if(number > currentMax) currentMax = number
  });

  return currentMax;
}

exports.avg = function avg (array) {
  if (!array) return 0;
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  var denominator = array.length
  var nominator = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  });

  if (nominator === 0) return 0;

  return nominator / denominator;
}