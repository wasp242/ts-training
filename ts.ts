const filterAnagrams = (word: string, arr: string[]): string[] => {
  const sorted = word.split("").sort().join("");
  return arr.filter((item) => item.split("").sort().join("") === sorted);
};

console.log(
  filterAnagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
);
export default filterAnagrams;
