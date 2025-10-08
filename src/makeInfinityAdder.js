'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let usageCount = 0;

  const adder = (number) => {

    if (number === undefined) {
      const res = usageCount;
      
      usageCount = 0
      return res;
    }

    usageCount += number;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
