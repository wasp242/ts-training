export function multiplicationTable(size: number): number[][] {
  let arr: number[][] = [];
  for (let i: number = 1; i < size + 1; i++) {
    let innerArr: number[] = [];
    for (let j: number = i; j < size * i + 1; j += i) {
      innerArr.push(j);
    }
    arr.push(innerArr);
  }
  return arr;
}
console.log(multiplicationTable(3));
