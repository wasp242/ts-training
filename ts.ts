const filter = (numbers: number[], callback: (n: number) => boolean) => {
  let arr: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const value = callback(numbers[i]);
    value ? arr.push(numbers[i]) : null;
  }
  return arr;
};

export default filter;
const numbers = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers, (n) => n > 3)); // [4, 133]
