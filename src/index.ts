/**
 * Create a function that takes a `gridSize` argument and returns a
 * "Multiplication Grid", starting at 1 and incrementing by 1 until reaching
 * the `gridSize` value.
 * @see https://en.wikipedia.org/wiki/Grid_method_multiplication
 *
 * @note Values in a given column should all be right-aligned.
 *
 * @example
 * // Create a 5x5 Multiplication Grid
 * createMultiplicationGrid(5);
 * // Would generate the output
 * `1  2  3  4  5
 * 2  4  6  8 10
 * 3  6  9 12 15
 * 4  8 12 16 20
 * 5 10 15 20 25`
 */

/**
 * Try and get as far as you can towards a solution. We are interested in
 * your problem-solving process, not necessarily the final result. 

 * @note Use the export and its name below as your starting point. It is
 * hooked up to a set of tests so you can track your progress towards the
 * final solution 😊
 * 
 * To view the testing panel click on the [Tests] tab in the right pane (next
 * to [Browser]).
 *
 * Good Luck, Have Fun 👍
 */

export const createMultiplicationGrid = (gridSize: number) => {
  var s = ``;

  let max_len = (gridSize * gridSize).toString().length;

  for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
      let n = (i * (j + 1)).toString().length - 1;
      let pad = max_len - n;

      s += " ".repeat(pad) + `${i * j}` + " ".repeat(pad); //add pad
      // delete first repeat in case of non-padded numbers
    }
    s = s.trim() + "\n";
  }

  return s.trim();
};
